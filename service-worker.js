importScripts("/precache-manifest.3180c73eb90ca6a4b40aeef0690bfd16.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// define a prefix for your cache names. It is recommended to use your project name
//workbox.core.setCacheNameDetails({prefix:  "galle-pwa"});

workbox.setConfig({
    debug: true
});

// These lines are responsible for precaching static resources. Using 'generateSW'(zero config), these lines would be added automatically to the serviceworker.
// __precacheManifest is the list of resources you want to precache. It will be generated and imported automatically by workbox during build time
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


workbox.routing.registerRoute(
    new RegExp("https://fonts.(?:googleapis|static).com/(.*)"),
    workbox.strategies.CacheFirst({
        cacheName: "googleapis",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ],
        method: "GET",
        cacheableResponse: { statuses: [{0, 200}]}
    })
);




// Here is where we apply our customization for the api
// all the api request wich starts with this pattern(first parameter) will use CacheFirst strategy for caching
/*
workbox.routing.registerRoute(
    /https:\/\/erp\.galle-gmbh\.de\/pwa\//,
    new  workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    /https:\/\/testerp\.galle-gmbh\.de\/pwa\//,
    new  workbox.strategies.CacheFirst()
);
*/


// @source https://www.youtube.com/watch?v=15Yr-J4X34M&t=1107s
