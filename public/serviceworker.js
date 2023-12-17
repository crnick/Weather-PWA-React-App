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
this.addEventListener("fetch", () => {});

//active service worker
this.addEventListener("activate", () => {});
