const CORE_CACHE_VERSION = "v6";
const CORE_CACHE_NAME = "mk-cache" + CORE_CACHE_VERSION;
const CORE_ASSETS = [
  // assets to save
  "/offline",
  "/images/app_icon/icon-192x192.png",
  "/style/global.css",
];

self.addEventListener("install", (event) => {
  console.log("install the service worker");

  // pre saves the offline page in the cache
  event.waitUntil(
    caches.open(CORE_CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim()); // Service workers works direct instead after a reload in multiple browser tabs
  // resource https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
  console.log("activate service worker. Removing old cache versions if needed");

  // removes old cache if version is updated
  event.waitUntil(
    caches
      .keys() // RESOURCE https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage // https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/keys
      .then((keylist) => {
        return Promise.all([
          keylist
            .filter(
              (cacheKey) =>
                cacheKey.includes("mk-cache") && cacheKey !== CORE_CACHE_NAME
            ) // array of strings with caches that include fam-cache but are not the current version
            .forEach((outdatedCache) => caches.delete(outdatedCache)),
        ]);
      })
  );
});

self.addEventListener("fetch", (event) => {
  // do crazy cool things

  if (
    event.request.method === "GET" &&
    CORE_ASSETS.includes(getPathName(event.request.url))
  ) {
    // cache only strategy --> CSS / JS / etc..
    event.respondWith(
      caches
        .open(CORE_CACHE_NAME)
        .then((cache) => cache.match(event.request.url))
    );
  }

  // html get request
  // open the page the normal way
  // save the page in the cache
  // if offline, open the page from the chache if it is available
  // otherwise show offline page
  else if (htmlGetRequest(event.request)) {
    event.respondWith(
      fetchAndCache(event.request, "html-cache").catch(() => {
        return caches
          .open("html-cache")
          .then((cache) => cache.match(event.request.url))
          .catch(() => {
            return caches
              .open(CORE_CACHE_NAME)
              .then((cache) => cache.match("/offline"));
          });
      })
    );
  }
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
