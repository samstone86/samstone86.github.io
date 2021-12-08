importScripts("/precache-manifest.3180c73eb90ca6a4b40aeef0690bfd16.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    new RegExp("https://fonts.(?:googleapis|static).com/(.*)"),
    new workbox.strategies.CacheFirst({
        cacheName: "googleapis",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ],
        method: "GET",
        cacheableResponse: { statuses: [0, 200]}
    })
);

// @source https://www.youtube.com/watch?v=15Yr-J4X34M&t=1107s
