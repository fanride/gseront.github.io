'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7a322169d4b816963f81b25e7dc9f7c7",
"assets/assets/airconditioning.png": "2fca00649d729c8e66bd8dff5c706ecb",
"assets/assets/apple-touch-icon.png": "be23803af3f85b37b7d5ac5ceed03f10",
"assets/assets/badge-500km.png": "df506c98298019e8d561017a922f6561",
"assets/assets/badge-cleancar.png": "1e6413349dfb7b0c3b4bfd0cf1592bf5",
"assets/assets/blonde_red_head.png": "9294ea6af576dc0a0668a6c04986f279",
"assets/assets/bloodredshoes.png": "c64dcab30ea50778db6e4452113f3eeb",
"assets/assets/cfg/app_settings.json": "22b17387c32e4ca97a65d834141130bb",
"assets/assets/davina.png": "35ea59ea89fde80212f63b2cc02493aa",
"assets/assets/dedijk.png": "c9f0dbc266fb0e0e4403bd3d9164b354",
"assets/assets/empty-spot.png": "bad74588682219a19346a3239e4d7201",
"assets/assets/fanride-banner.png": "8216d3fc882e138589245e164a208978",
"assets/assets/fanridebanner-411x123.png": "2d308235d7a738692dc571e8e8689af0",
"assets/assets/fatal-flowers.png": "7e11d1225a473cd73084d5902993efb5",
"assets/assets/favicon-16x16.png": "2cf2afd249dc6bcf30b4d996809b5f29",
"assets/assets/favicon-32x32.png": "8c1fe01f09bbdd07fce9d7d46c571f12",
"assets/assets/fontaines.png": "09bc9b60bb94367b0d729edfd32500e6",
"assets/assets/fonts/Soleil-Extrabold.ttf": "be7b642ebfc694388c7487a4c485966a",
"assets/assets/fonts/Soleil-Regular.ttf": "ed75677840e6af1557afa5ae4abf8f2a",
"assets/assets/gregory.png": "53f77a8587daf1327964b0a0d9b63ffd",
"assets/assets/ic--fanride.png": "380ee2b58fc0128602669df01d766a9e",
"assets/assets/ic--maps.png": "b3b0c4d9905756a4cc4278ecf6a2352c",
"assets/assets/ic--scan.png": "1f04a8fa9e484f4a271fc93107a56404",
"assets/assets/ic--spotify.png": "17366c6ca4d9354d84c47d2f799c60de",
"assets/assets/lizzo.png": "1a876f3f16fe5a2f56371d3989b168bc",
"assets/assets/lowlands.png": "c82b0d1d013689a476482ee2572cf648",
"assets/assets/no-eating.png": "ca888ff383521fd444860be1ffaa36fc",
"assets/assets/piercebrothers.png": "d511c43263df91d8ed2d7ad6f154573a",
"assets/assets/pipblom.png": "d511c43263df91d8ed2d7ad6f154573a",
"assets/assets/pukkelpop.png": "5a63bd53dbcde98d1f9c75e47d6037ca",
"assets/assets/snollebollekes.png": "72c8852be7251594e03e07c9d2d3dcea",
"assets/assets/thekik.png": "4d70517d1a5aa3bd9b304db9b0977a85",
"assets/assets/user_bram.png": "218a4569570716e30caf4b26f5bfdcea",
"assets/assets/user_freek.png": "952c48c7eb7969e0bdc9ac5c722c4a39",
"assets/assets/user_jasper.png": "741338c10c785e82565cbff26eb99bc5",
"assets/assets/user_julia.png": "3fc9fc73b9a5f479d10e0a30d6021bfc",
"assets/assets/user_marije.png": "4574aad6c42a508b8d7c717fde82edc7",
"assets/assets/user_sam.png": "7b18c62d1bee1ea83abf014919851d6a",
"assets/assets/user_sander.png": "6a92d782150a9cef08d3a89a24fdf7eb",
"assets/assets/user_sanne.png": "67c5a08b11fb0e2fd1e29352c09d4694",
"assets/FontManifest.json": "77cb8a48b0e9b23f1819764440a37da5",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/i18n/en.json": "90fab5adcfca843261371086fef9d9e9",
"assets/NOTICES": "c44a65e2c47936d9448c13eb9e5a784d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"cors.json": "ba737af866a915eb6f9e08ce68419b35",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "054a67c4a1b7cfbe590937c72905fd35",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ba5049a72ae145da9f4bb80e4e28ef94",
"/": "ba5049a72ae145da9f4bb80e4e28ef94",
"main.dart.js": "e196f9e6c4c3b5adf0192532ee0b0020",
"manifest.json": "bce3b20ce56d056d46d3cd4bdfa85897",
"version.json": "308fb33162c9fe576bf1f16436d2da45"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
