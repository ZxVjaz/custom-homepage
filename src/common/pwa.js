// Progressive Web App (PWA) Manager
// Handles Service Worker registration, manual update notifications, and offline status

(function () {
  let registration = null;
  let waitingWorker = null;
  let isRefreshing = false;

  const PWA = {
    version: '...',

    /**
     * Get the active application version dynamically from the Service Worker (sw.js)
     * @returns {Promise<string>}
     */
    async getVersion() {
      // 1. Try querying active controller
      if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        try {
          const ver = await new Promise((resolve) => {
            const channel = new MessageChannel();
            const timeout = setTimeout(() => resolve(null), 500);
            channel.port1.onmessage = (event) => {
              clearTimeout(timeout);
              if (event.data && event.data.version) {
                resolve(event.data.version);
              } else {
                resolve(null);
              }
            };
            navigator.serviceWorker.controller.postMessage({ type: 'GET_VERSION' }, [channel.port2]);
          });
          if (ver) {
            this.version = ver;
            return ver;
          }
        } catch (e) {
          // fallback below
        }
      }

      // 2. Fallback: inspect sw.js script directly so it never needs hardcoding
      try {
        const res = await fetch('./sw.js', { cache: 'no-cache' });
        if (res.ok) {
          const text = await res.text();
          const match = text.match(/APP_VERSION\s*=\s*['"]([^'"]+)['"]/);
          if (match && match[1]) {
            this.version = match[1];
            return match[1];
          }
        }
      } catch (e) {
        // ignore
      }

      return this.version !== '...' ? this.version : 'latest';
    },

    /**
     * Initialise the PWA manager and register the service worker
     */
    init() {
      // Suppress browser install prompts (app is purely a browser homepage)
      window.addEventListener('beforeinstallprompt', (e) => e.preventDefault());

      if (!('serviceWorker' in navigator)) {
        console.log('[PWA] Service Worker not supported in this browser.');
        return;
      }

      // Reload only once when controller changes (worker activated)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!isRefreshing) {
          isRefreshing = true;
          window.location.reload();
        }
      });

      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js', { scope: './' })
          .then((reg) => {
            registration = reg;
            console.log(`[PWA] Service Worker registered (scope: ${reg.scope})`);

            // If a worker is already waiting, prompt user
            if (reg.waiting) {
              waitingWorker = reg.waiting;
              this.showUpdateNotification();
              return;
            }

            // Detect new worker being installed
            reg.addEventListener('updatefound', () => {
              const newWorker = reg.installing;
              if (!newWorker) return;

              newWorker.addEventListener('statechange', () => {
                // If installed and controller exists, it's a new update waiting for user action
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  waitingWorker = newWorker;
                  this.showUpdateNotification();
                }
              });
            });
          })
          .catch((err) => {
            console.warn('[PWA] Service Worker registration failed:', err);
          });
      });
    },

    /**
     * Check for updates manually on demand
     * @returns {Promise<{ status: string, message: string }>}
     */
    async checkUpdate() {
      if (!('serviceWorker' in navigator) || !registration) {
        return { status: 'unsupported', message: 'Service Worker is not supported or active.' };
      }

      if (!navigator.onLine) {
        return { status: 'offline', message: 'Cannot check for updates while offline.' };
      }

      try {
        await registration.update();

        if (registration.waiting) {
          waitingWorker = registration.waiting;
          this.showUpdateNotification();
          return { status: 'update_found', message: 'A new version is available!' };
        }

        if (registration.installing) {
          return new Promise((resolve) => {
            const worker = registration.installing;
            worker.addEventListener('statechange', () => {
              if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                waitingWorker = worker;
                this.showUpdateNotification();
                resolve({ status: 'update_found', message: 'A new version is available!' });
              }
            });
            setTimeout(() => resolve({ status: 'up_to_date', message: 'Homepage is up to date!' }), 2000);
          });
        }

        return { status: 'up_to_date', message: 'Homepage is already using the latest version!' };
      } catch (err) {
        console.warn('[PWA] Check update error:', err);
        return { status: 'error', message: 'Failed to check for updates.' };
      }
    },

    /**
     * Instruct the waiting service worker to activate and reload
     */
    applyUpdate() {
      if (waitingWorker) {
        waitingWorker.postMessage({ type: 'SKIP_WAITING' });
      } else if (registration && registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      } else {
        window.location.reload();
      }
    },

    /**
     * Dismiss the update toast notification
     */
    dismissUpdate() {
      const toast = document.getElementById('pwa-update-toast');
      if (toast) {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 250);
      }
    },

    /**
     * Display the floating Catppuccin update notification toast
     */
    showUpdateNotification() {
      if (document.getElementById('pwa-update-toast')) return;

      this.injectStyles();

      const toast = document.createElement('div');
      toast.id = 'pwa-update-toast';
      toast.className = 'pwa-toast';
      toast.innerHTML = `
        <div class="pwa-toast-content">
          <i class="ti ti-sparkles pwa-toast-icon"></i>
          <div class="pwa-toast-text">
            <div class="pwa-toast-title">Update Available</div>
            <div class="pwa-toast-desc">A newer version of homepage is ready.</div>
          </div>
        </div>
        <div class="pwa-toast-actions">
          <button type="button" class="pwa-btn-update" id="pwa-btn-update">Update Now</button>
          <button type="button" class="pwa-btn-dismiss" id="pwa-btn-dismiss" title="Dismiss">✕</button>
        </div>
      `;

      document.body.appendChild(toast);

      toast.querySelector('#pwa-btn-update').onclick = () => {
        toast.querySelector('#pwa-btn-update').textContent = 'Updating...';
        toast.querySelector('#pwa-btn-update').disabled = true;
        this.applyUpdate();
      };

      toast.querySelector('#pwa-btn-dismiss').onclick = () => {
        this.dismissUpdate();
      };

      // Trigger animation
      requestAnimationFrame(() => {
        toast.classList.add('show');
      });
    },

    /**
     * Inject Catppuccin-styled CSS for the update toast
     */
    injectStyles() {
      if (document.getElementById('pwa-toast-styles')) return;

      const p = (window.CONFIG && window.CONFIG.palette) ? window.CONFIG.palette : {
        base: '#1e1e2e',
        mantle: '#181825',
        surface0: '#313244',
        surface1: '#45475a',
        text: '#cdd6f4',
        subtext0: '#a6adc8',
        blue: '#89b4fa',
        lavender: '#b4befe',
      };

      const style = document.createElement('style');
      style.id = 'pwa-toast-styles';
      style.textContent = `
        .pwa-toast {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999999;
          background: ${p.mantle};
          border: 1px solid ${p.surface1};
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: 'Roboto', sans-serif;
          color: ${p.text};
          transform: translateY(20px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
        }

        .pwa-toast.show {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .pwa-toast-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pwa-toast-icon {
          font-size: 22px;
          color: ${p.blue};
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pwa-toast-title {
          font-size: 13.5px;
          font-weight: 600;
          color: ${p.text};
          line-height: 1.2;
        }

        .pwa-toast-desc {
          font-size: 11.5px;
          color: ${p.subtext0};
          margin-top: 3px;
        }

        .pwa-toast-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pwa-btn-update {
          background: ${p.blue};
          color: ${p.base};
          border: none;
          border-radius: 6px;
          padding: 7px 13px;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          transition: filter 0.15s ease;
          white-space: nowrap;
        }

        .pwa-btn-update:hover {
          filter: brightness(1.15);
        }

        .pwa-btn-dismiss {
          background: transparent;
          color: ${p.subtext0};
          border: none;
          border-radius: 6px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .pwa-btn-dismiss:hover {
          background: ${p.surface0};
          color: ${p.text};
        }
      `;

      document.head.appendChild(style);
    }
  };

  window.PWA = PWA;
  PWA.init();
})();
