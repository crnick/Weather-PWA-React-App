const CACHE_NAME = "version-1"; //storage of browser cache
const urlsToCache = ["index.html", "offline.html"];

//listen to installation event of service worker
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(urlsToCache);
    })
  );
});
//listen to requests
this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request) // request for api call, or for an image
      .then(() => {
        return fetch(event.request);
      })
      .catch(() => caches.match("offline.html"))
  ); // if we don't get the resource that we want, returns an error
});

//active service worker
this.addEventListener("activate", (event) => {
  //we are going to remove caches
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME); // what we want to keep
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // will delete any new versions and always keep version-1
          }
        })
      )
    )
  );
});
