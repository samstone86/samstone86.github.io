importScripts("/precache-manifest.bac5011b4c1e3cf28310a6d92e437f0c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

//The new installed service worker replaces the old service worker immediately
self.skipWaiting();

workbox.setConfig({
    debug: true
});

// define a prefix for your cache names. It is recommended to use your project name
workbox.core.setCacheNameDetails({prefix:  "galle-pwa"});

// These lines are responsible for precaching static resources. Using 'generateSW'(zero config), these lines would be added automatically to the serviceworker.
// __precacheManifest is the list of resources you want to precache. It will be generated and imported automatically by workbox during build time
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com' ||
               url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-fonts',
        plugins: [
            new workbox.expiration.Plugin({maxEntries: 20}),
        ],
    }),
);

workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' ||
                   request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
);

// @source https://www.youtube.com/watch?v=15Yr-J4X34M&t=1107s


//BackgroundSync
const bgSyncPlugin = new workbox.backgroundSync.Plugin('queue', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

// Only register the time-tracking route for backgroundSync
workbox.routing.registerRoute(
    'https://testerp.galle-gmbh.de/pwa/toggleTimeTrack',
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
);
