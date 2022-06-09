'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "596d7af69624469ab49ed742285ce130",
"index.html": "024a4544a4861b10eef411eaca17e04c",
"/": "024a4544a4861b10eef411eaca17e04c",
"main.dart.js": "30104647ca16fcb36e091e0f6a09dbca",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "49420ee6d6bb8fb3d862e7a6ae33a16c",
".git/ORIG_HEAD": "7051333f4b86fc83621542825a430d55",
".git/config": "759d8f90a9d7575e1f5210d863bc6ba3",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/03/6643b642a3d42129fc1ec5df3f3411b8bdf67e": "2fd9db33fe831b93f14e68728a7fb927",
".git/objects/56/0e9679bcfc538e9044d7ec47ccdc3bb042f033": "54db886a30dce276555d27326b7782bf",
".git/objects/67/c50ea904b1b01cba96e16c1f7756de072d1958": "a4da8ce193d74acac600e64112cb8bd3",
".git/objects/df/5d6b6d00bb0f98388ec1186509d4bba2093245": "37a0a067e6dbd07059d4a8e4a90e9fd0",
".git/objects/a5/e6a662761fcdafc7605390f60aa94d964f480b": "7b4f5b3cb5a60b602ad45d8401a0d2b4",
".git/objects/eb/c6695e646e86b24f254ae5c3d5b024fcc53b73": "091b1c72d6cdddb361911f13f3863f6c",
".git/objects/pack/pack-f58eecc91214d40f35ac6b3b4f05147f9c4afa34.idx": "e8b3daa94a0b2f75ff3d4ce970e59be2",
".git/objects/pack/pack-f58eecc91214d40f35ac6b3b4f05147f9c4afa34.pack": "7b3338783942982a37a4b610b68831d3",
".git/objects/89/c1a5bb6ca9c89ccfa0c97dd7dff6e43c42bb2f": "42e677908c5b0bf0516b6ff17c4e7e48",
".git/objects/80/97088325038ae912685513597c457b2fd50355": "a2a4aa1cb28e2577b6c7659a3201f190",
".git/objects/28/994d71453147d7e62f6a4033c37bc88ea9cd5e": "9495df1a7b449600083d7bca4c0c997a",
".git/objects/65/c72a8c57b166030e2029d606df37b3abf71bcb": "66138ccb596070e3d16255ea0ee7fe6f",
".git/objects/5b/5e8de3293b7a5af7c6e72115123b2c5cbc6593": "640ae2184a9d24fd3a1c87df8b38ca02",
".git/objects/a0/7b8041bee7c35839b528b20a552fb893b1cb19": "dec1cd1a24231e69bffa8f2e430ab14d",
".git/objects/dc/5824e14e6e5e46b38fc4b6679714fc4156f0a4": "ff79ad43af490fb1d575bfb9c5adf40a",
".git/objects/d2/0b6f621f84a0c2dc4e435b0be968936228cd9f": "939014d38b6e97212620ff4ff0378180",
".git/objects/c4/99f7035458ecebeb6a7332469ae26395871a67": "a87dd467d8a438fc7ec51c846dbe2ad8",
".git/objects/2d/73c18a0e54d292ca7a8d5bb61a54bd97dadc79": "2af2c09f4c15ae5090b9fadd6cdda653",
".git/objects/8c/691d7279d99b16922c25fa9817bb54ef818094": "34a167958c5da4778ff7691aa442f3d2",
".git/objects/71/30a572d924a1c0cf43ade4a7fa947fbdabe14f": "fe21f729d28d09912b375decebdf0a91",
".git/objects/76/e6c2e62d5f6e8e6c7b955c409483fcd309aca6": "fad232c53208eded9f8ee5ba1db66b81",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/14/c48a97d7bffa55b33cff5dfee52bf94561af80": "dc3388afb3f64ac077b602e4377fa7ca",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2215df6afe65a8a3036d4c40ef4158cd",
".git/logs/refs/heads/main": "2215df6afe65a8a3036d4c40ef4158cd",
".git/logs/refs/remotes/origin/HEAD": "50735f3869d73d3d0a2025d58cfed2ee",
".git/logs/refs/remotes/origin/main": "72ea0e1fb3d780f56c4e7ec00971d498",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2ab3ffc9d41cdebe6516e7649d8cac9b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2ab3ffc9d41cdebe6516e7649d8cac9b",
".git/index": "c94d89cd65f747ed94ee038e5cda2f28",
".git/packed-refs": "fbb789e1f244dcf1a0c278fe0769be17",
".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/FETCH_HEAD": "28446c17418bc73e6417c38cc52c8077",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "ac2d882187e3b6419990718e20a68277",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
