/* service-worker.js */
const CACHE_NAME = "nlp-cache";

// Listen for network requests from the main document
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["./get-data"]);
    })
  );
});

// Listen for network requests from the main document
self.addEventListener("fetch", (event) => {
  // Return data from cache
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Check if we received a valid response
      if (!response || response.status !== 200 || response.type !== "basic") {
        return response;
      }

      // IMPORTANT: Clone the response. A response is a stream
      // and because we want the browser to consume the response
      // as well as the cache consuming the response, we need
      // to clone it so we have two streams.
      var responseToCache = response.clone();

      caches.open(CACHE_NAME).then((cache) => {
        // eslint-disable-next-line no-console
        console.log("INTERCEPTED", cache);

        cache.put(event.request, responseToCache);
      });

      return response;
    })
  );
});
