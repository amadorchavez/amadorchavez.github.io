self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open('cacheV1').then(function(cache) {
        return cache.addAll(
        [
          'index.html',
          'fonts.css',
          'monday-a.html',
          'blender/blenderpro-medium-webfont.ttf',
          'PFDin/PFDinDisplayPro-Regular.ttf'
        ]);
      })
      .then(function() {
        console.log('WORKER: install completed');
      })
  );
});

// Return Cached Pages and fall back to network
self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response){
      return response || fetch(event.request);
      })
    );
  });

// Delete old Caches
// self.addEventListener('activate', event => {
//   console.log('Activating new service worker...');
//
//   const cacheAllowlist = [staticCacheName];
//
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cacheName => {
//           if (cacheAllowlist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
