const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/styles/globals.css',
  '/vercel.svg',
  '/next.svg',
  '/icon-192x192.svg',
  '/icon-512x512.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      // Use a Promise.all to cache files and catch any errors
      return Promise.all(
        urlsToCache.map(url => {
          return cache.add(url).catch(error => {
            console.error('Error caching ' + url + ': ' + error);
          });
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => caches.match('/offline.html'));
      })
  );
});

// Add a new event listener for cache cleanup
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

