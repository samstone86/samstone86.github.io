importScripts("/precache-manifest.d8ff3f5d0963227437c79b1bb54b923b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// define a prefix for your cache names. It is recommended to use your project name
workbox.core.setCacheNameDetails({prefix:  "galle-pwa"});

// These lines are responsible for precaching static resources. Using 'generateSW'(zero config), these lines would be added automatically to the serviceworker.
// __precacheManifest is the list of resources you want to precache. It will be generated and imported automatically by workbox during build time
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Here is where we apply our customization for the api
// all the api request wich starts with this pattern(first parameter) will use CacheFirst strategy for caching
workbox.routing.registerRoute(
    /https:\/\/get\.geojs\.io\/v1\/ip\/country\.json/,
    new  workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
    '/pwa/checkLogin',
    async ({event}) => staleWhileRevalidate(event),
    'POST'
);

workbox.routing.registerRoute(
    '/pwa/toggleTimeTrack',
    async ({event}) => staleWhileRevalidate(event),
    'POST'
);
