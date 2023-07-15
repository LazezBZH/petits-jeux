const CACHE_NAME = `petits-jeux`;

// Use the install event to pre-cache all initial resources.
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./des/index.html",
        "./des/des.css",
        "./des/des.js",
        "./devine/index.html",
        "./devine/devine.css",
        "./devine/devine.js",
        "./memory/index.html",
        "./memory/memory.css",
        "./memory/memory.js",
        "./memoryHard/index.html",
        "./memoryHard/memory.css",
        "./memoryHard/memory.js",
        "./moustiques/index.html",
        "./moustiques/moustiques.css",
        "./moustiques/moustiques.js",
        "./pendu/index.html",
        "./pendu/pendu.css",
        "./pendu/pendu.js",
        "./puzzle/index.html",
        "./puzzle/puzzle.css",
        "./puzzle/puzzle.js",
        "./quizz/index.html",
        "./quizz/quizz.css",
        "./quizz/quizz.js",
        "./swap/index.html",
        "./swap/swap.css",
        "./swap/swap.js",
      ]);
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // Get the resource from the cache.
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed
        }
      }
    })()
  );
});
