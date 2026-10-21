// Search component, supports multiple search engines, live Catppuccin mode badge, and Chevron transitions
class Search extends Component {
  refs = {
    search: '#search',
    box: '.search-box',
    input: '#search input[type="text"]',
    badge: '.search-mode-badge',
    badgeIcon: '.search-mode-badge i',
    engines: '.search-engines',
    close: '.close',
  };

  /**
   * Initialise the search component with configured engines
   */
  constructor() {
    super();

    this.engines = CONFIG.search.engines;
  }

  /**
   * Define the style for the search component using the current palette
   * @returns {string} CSS styles for the search component
   */
  style() {
    const p = CONFIG.palette;
    return `
      @keyframes settings-gear-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(180deg); }
      }

      #search {
          --search-accent: ${p.lavender};
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: ${p.mantle}e6;
          z-index: 99;
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.2s;
      }

      #search.active {
          visibility: visible;
          opacity: 1;
          pointer-events: all;
      }

      .search-box {
          position: relative;
          width: 82%;
          max-width: 680px;
          transform: translateY(8px) scale(0.98);
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
      }

      #search.active .search-box {
          transform: translateY(0) scale(1);
      }

      .search-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 16px;
          background: ${p.base}cc;
          border: 1px solid ${p.surface0};
          border-bottom: 2px solid var(--search-accent);
          border-radius: 14px;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28), 0 0 24px -8px var(--search-accent);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }

      .search-mode-badge {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${p.mantle};
          border: 1.5px solid var(--search-accent);
          color: var(--search-accent);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .search-mode-badge i {
          font-size: 21px;
          line-height: 1;
          transition: transform 0.25s ease;
      }

      .search-mode-badge .badge-letter {
          font-family: 'Raleway', 'Roboto', sans-serif;
          font-weight: 800;
          font-size: 17px;
          line-height: 1;
          text-transform: uppercase;
      }

      .search-mode-badge.settings-mode i {
          animation: settings-gear-spin 0.45s cubic-bezier(0.22, 1, 0.36, 1);
      }

      #search input {
          border: 0;
          outline: 0;
          flex: 1;
          width: 100%;
          padding: 6px 36px 6px 0;
          background: none;
          font: 500 22px 'Roboto', sans-serif;
          letter-spacing: 0.6px;
          color: ${p.text};
          -webkit-user-select: text;
          user-select: text;
      }

      #search input::placeholder {
          color: ${p.overlay0};
          font-weight: 400;
      }

      #search input::selection {
          background: var(--search-accent);
          color: ${p.crust};
      }

      #search .close {
          background: transparent;
          border: 0;
          outline: 0;
          color: ${p.subtext0};
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
      }

      #search .close i {
          font-size: 19px;
      }

      #search .close:hover {
          background: ${p.surface0};
          color: ${p.red};
      }

      .search-engines {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          padding: 0 4px;
          margin: 14px 0 0 0;
      }

      .search-engines li {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 11px;
          border-radius: 999px;
          background: ${p.base}b3;
          border: 1px solid ${p.surface0};
          color: ${p.subtext0};
          font-size: 12px;
          font-family: 'Roboto', sans-serif;
          cursor: pointer;
          transition: all 0.18s ease;
          user-select: none;
      }

      .search-engines li i {
          font-size: 14px;
          color: var(--pill-color, ${p.overlay1});
          transition: color 0.18s ease;
      }

      .search-engines li .pill-letter {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: ${p.mantle};
          border: 1px solid var(--pill-color, ${p.overlay1});
          color: var(--pill-color, ${p.overlay1});
          font-family: 'Raleway', 'Roboto', sans-serif;
          font-weight: 800;
          font-size: 10px;
          line-height: 1;
          text-transform: uppercase;
      }

      .search-engines li .pill-prefix {
          font-weight: 700;
          color: ${p.text};
          opacity: 0.85;
      }

      .search-engines li .pill-name {
          opacity: 0.75;
      }

      .search-engines li:hover {
          border-color: var(--pill-color, ${p.lavender});
          color: ${p.text};
          transform: translateY(-1px);
      }

      .search-engines li.active {
          background: ${p.surface0}cc;
          border-color: var(--pill-color, ${p.lavender});
          color: ${p.text};
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
      }

      .search-engines li.active .pill-prefix,
      .search-engines li.active .pill-name {
          color: var(--pill-color, ${p.lavender});
          opacity: 1;
          font-weight: 700;
      }
    `;
  }

  /**
   * Import required fonts and icons for the search display
   * @returns {Array<string>} Array of resource imports
   */
  imports() {
    return [
      this.getResource('fonts', 'roboto'),
      this.getResource('fonts', 'raleway'),
      this.getResource('icons', 'material'),
      this.getResource('icons', 'tabler'),
    ];
  }

  /**
   * Render the search overlay template
   * @returns {string} HTML template for the search component
   */
  template() {
    return `
        <div id="search">
          <div class="search-box">
            <div class="search-input-wrap">
              <div class="search-mode-badge">
                <i class="ti ti-search"></i>
              </div>
              <input type="text" spellcheck="false" placeholder="Search the web or Type a URL">
              <button class="close" title="Close (Esc)"><i class="ti ti-x"></i></button>
            </div>
            <ul class="search-engines"></ul>
          </div>
        </div>
    `;
  }

  /**
   * Resolve engine display metadata (name, icon, Catppuccin accent color)
   * @param {string} key - Engine prefix key
   * @param {Array} data - Engine tuple [url, name, icon?]
   * @returns {{ name: string, icon: string, color: string }}
   */
  getEngineMeta(key, data) {
    const name = (Array.isArray(data) && data[1]) ? data[1] : (key || 'Search');
    const customIcon = (Array.isArray(data) && data[2]) ? data[2] : '';
    const lower = `${key} ${name}`.toLowerCase();
    const p = CONFIG.palette || {};

    if (customIcon) {
      return { name, icon: `ti-${customIcon.replace(/^ti-/, '')}`, color: p.lavender || '#b4befe' };
    }
    if (lower.includes('google')) {
      return { name, icon: 'ti-brand-google', color: p.blue || '#89b4fa' };
    }
    if (lower.includes('duck')) {
      return { name, icon: 'ti-shield-check', color: p.peach || '#fab387' };
    }
    if (lower.includes('perp')) {
      return { name, icon: 'ti-sparkles', color: p.teal || '#94e2d5' };
    }
    if (lower.includes('youtube')) {
      return { name, icon: 'ti-brand-youtube', color: p.red || '#f38ba8' };
    }
    if (lower.includes('git')) {
      return { name, icon: 'ti-brand-github', color: p.green || '#a6e3a1' };
    }
    if (lower.includes('reddit')) {
      return { name, icon: 'ti-brand-reddit', color: p.peach || '#fab387' };
    }
    if (lower.includes('bing')) {
      return { name, icon: 'ti-brand-bing', color: p.sapphire || '#74c7ec' };
    }
    if (lower.includes('yahoo')) {
      return { name, icon: 'ti-brand-yahoo', color: p.mauve || '#cba6f7' };
    }
    if (lower.includes('wiki')) {
      return { name, icon: 'ti-book', color: p.yellow || '#f9e2af' };
    }
    return { name, icon: 'ti-adjustments-horizontal', color: p.lavender || '#b4befe' };
  }

  /**
   * Render either a Tabler <i> icon or a fallback initial letter if the icon glyph is unavailable
   * @param {string} iconClass
   * @param {string} name
   * @param {string} letterClass
   * @returns {string} HTML string
   */
  renderBadgeLogo(iconClass, name, letterClass) {
    const hasGlyph =
      typeof TransitionAnimator !== 'undefined' &&
      TransitionAnimator.hasIconGlyph(iconClass);

    if (hasGlyph) {
      return `<i class="ti ${iconClass}"></i>`;
    }
    const letter =
      typeof TransitionAnimator !== 'undefined'
        ? TransitionAnimator.getFallbackLetter(name)
        : (String(name || '?').trim().charAt(0) || '?').toUpperCase();
    return `<span class="${letterClass}">${letter}</span>`;
  }

  /**
   * Load available search engines into the interface
   * @returns {void}
   */
  loadEngines() {
    this.engines = CONFIG.search.engines;

    const enginePills = Object.keys(this.engines)
      .map((key) => {
        const meta = this.getEngineMeta(key, this.engines[key]);
        const logoHtml = this.renderBadgeLogo(meta.icon, meta.name, 'pill-letter');
        return `
          <li data-prefix="!${key}" style="--pill-color: ${meta.color}" title="${meta.name}">
            ${logoHtml}
            <span class="pill-prefix">!${key}</span>
            <span class="pill-name">${meta.name}</span>
          </li>`;
      })
      .join('');

    this.refs.engines.innerHTML = enginePills;
    this.updateLiveMode('');
  }

  /**
   * Update the live left mode badge and pill highlights based on current input
   * @param {string} rawValue
   */
  updateLiveMode(rawValue) {
    const val = (rawValue || '').trim();
    const args = val.split(' ');
    const prefix = args[0] || '';
    const p = CONFIG.palette || {};

    const defaultEngineKey = CONFIG.search?.default || 'd';
    const defaultData =
      this.engines[defaultEngineKey] ||
      this.engines['d'] ||
      Object.values(this.engines)[0];

    let activeMeta = this.getEngineMeta(defaultEngineKey, defaultData);
    let isSettingsMode = false;

    if (val === ':settings') {
      activeMeta = {
        name: 'Settings',
        icon: 'ti-settings',
        color: p.mauve || '#cba6f7',
      };
      isSettingsMode = true;
    } else if (prefix.startsWith('!') && this.engines[prefix.slice(1)]) {
      const key = prefix.slice(1);
      activeMeta = this.getEngineMeta(key, this.engines[key]);
    } else if (val && this.isValidUrl(val)) {
      activeMeta = {
        name: 'Website',
        icon: 'ti-world',
        color: p.sapphire || p.blue || '#74c7ec',
      };
    }

    const searchEl = this.refs.search;
    const badgeEl = this.shadow.querySelector('.search-mode-badge');

    if (searchEl && searchEl.style) {
      searchEl.style.setProperty('--search-accent', activeMeta.color);
    }
    if (badgeEl) {
      badgeEl.innerHTML = this.renderBadgeLogo(activeMeta.icon, activeMeta.name, 'badge-letter');
      badgeEl.classList.toggle('settings-mode', isSettingsMode);
    }

    const pills = this.shadow.querySelectorAll('.search-engines li');
    pills.forEach((node) => {
      const pillPrefix = node.getAttribute('data-prefix');
      const isExplicitMatch =
        (pillPrefix === prefix) ||
        (!val && pillPrefix === `!${defaultEngineKey}`);
      node.classList.toggle('active', isExplicitMatch);
    });
  }

  /**
   * Open settings modal using the Portal-to-Modal transition
   */
  openSettingsWithPortal() {
    const badgeEl = this.shadow.querySelector('.search-mode-badge');
    this.deactivate();
    this.refs.input.value = '';
    this.updateLiveMode('');

    if (typeof TransitionAnimator !== 'undefined' && TransitionAnimator.playSettingsPortal) {
      TransitionAnimator.playSettingsPortal({
        originEl: badgeEl,
        onComplete: () => {
          Actions.activate('settings-modal');
        },
      });
    } else {
      Actions.activate('settings-modal');
    }
  }

  /**
   * Activate the search overlay
   * @returns {void}
   */
  activate() {
    this.loadEngines();
    this.refs.search.classList.add('active');
    setTimeout(() => {
      this.refs.input.focus();
      this.updateLiveMode(this.refs.input.value);
    }, 60);
  }

  /**
   * Deactivate the search overlay
   * @returns {void}
   */
  deactivate() {
    this.refs.search.classList.remove('active');
  }

  /**
   * Check if the input is a valid URL
   * @param {string} input - The input string to check
   * @returns {boolean} True if the input is a valid URL
   */
  isValidUrl(input) {
    const urlPatterns = [
      // Domain with TLD (e.g., google.com, github.com)
      /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/,
      // Full URLs with protocol
      /^https?:\/\/.+/,
      // URLs with www prefix
      /^www\..+/,
      // IP addresses
      /^(\d{1,3}\.){3}\d{1,3}(:\d+)?(\/.*)?$/,
      // localhost with optional port
      /^localhost(:\d+)?(\/.*)?$/
    ];

    return urlPatterns.some(pattern => pattern.test(input.trim()));
  }

  /**
   * Format URL for navigation
   * @param {string} url - The URL to format
   * @returns {string} Properly formatted URL with protocol
   */
  formatUrl(url) {
    url = url.trim();

    if (/^https?:\/\//.test(url)) {
      return url;
    }

    if (/^www\./.test(url)) {
      return `https://${url}`;
    }

    if (/^localhost/.test(url) || /^(\d{1,3}\.){3}\d{1,3}/.test(url)) {
      return `http://${url}`;
    }

    return `https://${url}`;
  }

  /**
   * Handle search input and engine selection
   * @param {KeyboardEvent} event - The keyboard event from user input
   * @returns {void}
   */
  handleSearch(event) {
    const { target, key } = event;

    if (key === 'Escape') {
      this.deactivate();
      return;
    }

    this.updateLiveMode(target.value);

    if (key === 'Enter') {
      const fullInput = target.value.trim();
      if (!fullInput) return;

      let args = fullInput.split(' ');
      let prefix = args[0];

      const defaultEngineKey = CONFIG.search?.default || 'd';
      let activeKey = defaultEngineKey;
      let activeEngineData =
        this.engines[defaultEngineKey] ||
        this.engines['d'] ||
        Object.values(this.engines)[0];
      let engine = activeEngineData?.[0] || 'https://google.com/search?q=';

      const openInNewTab = Boolean(event.ctrlKey || event.metaKey);

      if (fullInput === ':settings') {
        this.openSettingsWithPortal();
        return;
      }

      if (this.isValidUrl(fullInput)) {
        const formattedUrl = this.formatUrl(fullInput);
        let hostLabel = fullInput;
        try {
          hostLabel = new URL(formattedUrl).hostname.replace(/^www\./, '');
        } catch (_) {
          // Keep raw input if URL constructor fails
        }

        this.deactivate();
        target.value = '';
        this.updateLiveMode('');

        if (typeof TransitionAnimator !== 'undefined') {
          TransitionAnimator.playWaveRedirect({
            label: hostLabel,
            subtitle: formattedUrl,
            marqueeText: hostLabel,
            accentColor: CONFIG.palette.sapphire || CONFIG.palette.blue,
            secondaryColor: CONFIG.palette.mantle,
            iconClass: 'ti-world',
            onComplete: () => {
              TransitionAnimator.openUrl(formattedUrl, openInNewTab);
            },
          });
        } else {
          window.open(formattedUrl, openInNewTab ? '_blank' : '_self');
        }
        return;
      }

      // Check for engine prefix (e.g., !g for Google)
      if (prefix.indexOf('!') === 0) {
        const candidateKey = prefix.substr(1);
        const customEngine = this.engines[candidateKey];
        if (customEngine) {
          activeKey = candidateKey;
          activeEngineData = customEngine;
          engine = customEngine[0];
          args = args.slice(1);
        }
      }

      const queryStr = args.join(' ').trim();
      const finalUrl = engine + encodeURI(queryStr);
      const meta = this.getEngineMeta(activeKey, activeEngineData);

      this.deactivate();
      target.value = '';
      this.updateLiveMode('');

      if (typeof TransitionAnimator !== 'undefined') {
        TransitionAnimator.playWaveRedirect({
          label: meta.name,
          subtitle: queryStr,
          marqueeText: queryStr || meta.name,
          accentColor: meta.color,
          secondaryColor: CONFIG.palette.mantle,
          iconClass: meta.icon,
          onComplete: () => {
            TransitionAnimator.openUrl(finalUrl, openInNewTab);
          },
        });
      } else {
        window.open(finalUrl, openInNewTab ? '_blank' : '_self');
      }
    }
  }

  /**
   * Set up event listeners for search interactions
   * @returns {void}
   */
  setEvents() {
    this.refs.input.oninput = (e) => this.updateLiveMode(e.target.value);
    this.refs.search.onkeyup = (e) => this.handleSearch(e);
    this.refs.close.onclick = () => this.deactivate();

    // Close when clicking backdrop outside .search-box
    this.refs.search.onclick = (e) => {
      if (e.target === this.refs.search) {
        this.deactivate();
      }
    };

    // Clickable engine & :settings pills
    this.refs.engines.onclick = (e) => {
      const pill = e.target.closest('li[data-prefix]');
      if (!pill) return;

      const prefix = pill.getAttribute('data-prefix');
      if (prefix === ':settings') {
        this.openSettingsWithPortal();
        return;
      }

      const currentVal = this.refs.input.value.trim();
      const parts = currentVal ? currentVal.split(' ') : [];
      if (parts[0] && parts[0].startsWith('!')) {
        parts[0] = prefix;
        this.refs.input.value = parts.join(' ') + (parts.length === 1 ? ' ' : '');
      } else {
        this.refs.input.value = `${prefix} ${currentVal}`;
      }
      this.refs.input.focus();
      this.updateLiveMode(this.refs.input.value);
    };
  }

  /**
   * Initialise the search component when connected to DOM
   * @returns {void}
   */
  connectedCallback() {
    this.render().then(() => {
      this.loadEngines();
      this.setEvents();
    });
  }
}
