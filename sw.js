// Service Worker for Catppuccin Homepage (PWA)
// Enables 0-ms offline instant loading and manual user-controlled updates

const APP_VERSION = 'v1.0.0';
const CACHE_NAME = `catppuccin-homepage-${APP_VERSION}`;

// Core static assets to precache on install
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './userconfig.js',
  './src/css/style.css',
  './src/css/tabler-icons.min.css',
  './src/css/awoo.min.css',
  './src/css/awoo-local.min.css',
  './src/common/palette.js',
  './src/common/utils.js',
  './src/common/storage.js',
  './src/common/actions.js',
  './src/common/config.js',
  './src/common/strftime.js',
  './src/common/theme.js',
  './src/common/component.js',
  './src/common/module.js',
  './src/common/pwa.js',
  './src/components/clock/clock.component.js',
  './src/components/search/search.component.js',
  './src/components/settings/settings.component.js',
  './src/components/statusbar/statusbar.component.js',
  './src/components/tabs/tabs.component.js',
  './src/components/weather/weather.api.js',
  './src/components/weather/weather.component.js',
  './src/fonts/tabler-icons.woff2',
  './src/fonts/tabler-icons.woff',
  './src/fonts/tabler-icons.ttf',
  './src/fonts/roboto-local.css',
  './src/fonts/nunito-local.css',
  './src/fonts/raleway-local.css',
  './src/fonts/material-icons-local.css',
  './src/fonts/roboto-100.ttf',
  './src/fonts/roboto-400.ttf',
  './src/fonts/roboto-700.ttf',
  './src/fonts/nunito-200.ttf',
  './src/fonts/raleway-600.ttf',
  './src/fonts/material-icons.ttf',
  './src/img/favicon.png',
];

// Add banner GIFs
for (let i = 1; i <= 18; i++) {
  const num = String(i).padStart(2, '0');
  PRECACHE_ASSETS.push(`./src/img/banners/banner_${num}.gif`);
}

// Install Event: cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Using cache.addAll with individual catch to be resilient
      return Promise.all(
        PRECACHE_ASSETS.map((url) => {
          return cache.add(url).catch((err) => {
            console.warn(`[PWA] Failed to precache ${url}:`, err);
          });
        })
      );
    })
  );
  // Do NOT skipWaiting automatically - wait for user confirmation via UI
});

// Activate Event: clean up older version caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME && (name.startsWith('catppuccin-homepage-') || name.startsWith('catppuccin-startpage-'))) {
            console.log(`[PWA] Removing deprecated cache: ${name}`);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-First strategy with network fallback & runtime caching
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Handle same-origin requests or local assets
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        }).catch(() => {
          // Offline fallback for navigation requests
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
    );
  }
});

// Message Event: listen for manual skipWaiting from user action and version requests
self.addEventListener('message', (event) => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  } else if (event.data.type === 'GET_VERSION') {
    if (event.ports && event.ports[0]) {
      event.ports[0].postMessage({ version: APP_VERSION });
    }
  }
});
