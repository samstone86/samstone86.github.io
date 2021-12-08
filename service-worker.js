importScripts("/precache-manifest.7649abcd267e2cb998a48c156a5f85a7.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// define a prefix for your cache names. It is recommended to use your project name
workbox.core.setCacheNameDetails({prefix:  "galle-pwa-project"});

// These lines are responsible for precaching static resources. Using 'generateSW'(zero config), these lines would be added automatically to the serviceworker.
// __precacheManifest is the list of resources you want to precache. It will be generated and imported automatically by workbox during build time
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Here is where we apply our customization for the api
// all the api request wich starts with this pattern(first parameter) will use CacheFirst strategy for caching
workbox.routing.registerRoute(
    /https:\/\/samstone86\.github\.io\//,
    new  workbox.strategies.CacheFirst()
);
