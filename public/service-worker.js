const CORE_CACHE_VERSION = "1";
const CORE_CACHE_NAME = "mk-cache" + CORE_CACHE_VERSION;
const CORE_ASSETS = [
  // assets to save
  "/offline",
];

self.addEventListener("install", (event) => {
  console.log("install the service worker");

  // pre saves the offline page in the cache
  // event.waitUntil(
  //   caches.open(CORE_CACHE_NAME).then((cache) => {
  //     return cache.addAll(CORE_ASSETS).then(() => self.skipWaiting());
  //   })
  // );
});

self.addEventListener("activate", (event) => {
  console.log("activate service worker. Removing old cache versions if needed");
});

self.addEventListener("fetch", (event) => {
  // do crazy cool things
  // if (
  //   event.request.method === "GET" &&
  //   CORE_ASSETS.includes(getPathName(event.request.url))
  // ) {
  //   // cache only strategy --> CSS / JS / etc..
  //   event.respondWith(
  //     caches
  //       .open(CORE_CACHE_NAME)
  //       .then((cache) => cache.match(event.request.url))
  //   );
  // }
});

// HELPER FUNCTIONS ----------------
function fetchAndCache(request, cacheName) {
  // adds each visited page to cache
  return fetch(request).then((response) => {
    const clone = response.clone();
    caches.open(cacheName).then((cache) => cache.put(request, clone));
    return response;
  });
}
// Checks if the request is a GET and a HTML request
function htmlGetRequest(request) {
  return (
    request.method === "GET" &&
    request.headers.get("accept") !== null &&
    request.headers.get("accept").indexOf("text/html") > -1
  );
}

function getPathName(requestUrl) {
  const url = new URL(requestUrl);
  return url.pathname;
}
