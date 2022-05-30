const CORE_CACHE_VERSION = "v2";
const CORE_CACHE_NAME = "mk" + CORE_CACHE_VERSION;
const CORE_ASSETS = ["/offline"];

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
});

self.addEventListener("fetch", (event) => {
  // do crazy cool things

  // html get request
  // If the page is in the chache, open the page through the cashe for faster loading
  // Update the cache in the meanwhile, next page visits include the updates.
  if (htmlGetRequest(event.request)) {
    event.respondWith(
      caches
        .open("html-cache")
        .then((cache) => cache.match(event.request))
        .then((response) =>
          response ? response : fetchAndCache(event.request, "html-cache")
        )
        .catch(() => {
          return caches
            .open(CORE_CACHE_NAME)
            .then((cache) => cache.match("/offline"));
        })
    );

    // event.waitUntil(fetchAndCache(event.request, "html-cache"));
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
