'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "305846ebcad5d124f2d3bfde0ece5c1f",
"/assets\assets\CalibreBlack.otf": "8d48552b0e3b90fc79b5091bb267001b",
"/assets\assets\CalibreBlackItalic.otf": "ff846369e54d0848199f69f467a1b22e",
"/assets\assets\CalibreBold.otf": "6feab952cf49b02691706705199cf5ae",
"/assets\assets\CalibreBoldItalic.otf": "2ae3c004b5e05f6d3427dacc05774863",
"/assets\assets\CalibreLight.otf": "e482c8d66f956a7e8e6650b2e73af24e",
"/assets\assets\CalibreLightItalic.otf": "898ac981eca97e44c3cd5193ac366193",
"/assets\assets\CalibreMedium.otf": "75ad32e445817b9758d039e10420e26b",
"/assets\assets\CalibreMediumItalic.otf": "844c67538e90c0c8d2b059497b82d94f",
"/assets\assets\CalibreRegular.otf": "93957dd48040dc5deb1cd40b4385de45",
"/assets\assets\CalibreRegularItalic.otf": "9f59f3c0096b6655fcd089b132337bf8",
"/assets\assets\CalibreSemibold.otf": "85d899ede90fe5568dad1b0438022ab3",
"/assets\assets\CalibreSemiboldItalic.otf": "5a68b460cfb206c15f3c4e65e1ba6e5e",
"/assets\assets\CalibreThin.otf": "adc68d7fb3bb1c04531d4ffcda3b7fd7",
"/assets\assets\CalibreThinItalic.otf": "67d20f0177043fa9fc2438c1e71da17e",
"/assets\assets\ken_profile_pic.jpg": "2ef0dc7aeb57b199cc30f5a185a69b79",
"/assets\assets\SFMono-Bold.otf": "a587827f55348749f899f4ab8169cbe2",
"/assets\assets\SFMono-BoldItalic.otf": "46d32931769b21e70cfcdb6ea2d0a1cd",
"/assets\assets\SFMono-Heavy.otf": "a20c143b7bec53cd427818b26c17d246",
"/assets\assets\SFMono-HeavyItalic.otf": "f1a0b99769778ac82fef12fdfc6c366c",
"/assets\assets\SFMono-Light.otf": "761bd0787c7aed01f9dd25433db0bfa5",
"/assets\assets\SFMono-LightItalic.otf": "6762cf0345fa31ebcddeac4d7395c765",
"/assets\assets\SFMono-Medium.otf": "dd6296df915f391c29989c19e3e8a94e",
"/assets\assets\SFMono-MediumItalic.otf": "356df2fe1393b0496b8132480c57f6b3",
"/assets\assets\SFMono-Regular.otf": "41b67f4d3dcf092055b37014cbe5cd05",
"/assets\assets\SFMono-RegularItalic.otf": "ecbb1879e117e5bb3b057af8c9ccaf73",
"/assets\assets\SFMono-Semibold.otf": "ae31eb443da4810ba47c860df97548ad",
"/assets\assets\SFMono-SemiboldItalic.otf": "badfd0a2c1d158ae22bf956de85eb68b",
"/assets\assets\under_construction.png": "6f029f00284d0e2deed421b580f666df",
"/assets\FontManifest.json": "eb0c4c447382e81f81f9eb78392c3996",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\ken_profile_pic.jpg": "2ef0dc7aeb57b199cc30f5a185a69b79",
"/assets\LICENSE": "d76455284df3fd524481661aa6e008ec",
"/assets\packages\community_material_icon\fonts\materialdesignicons-webfont.ttf": "baded94134f273450a473a4962111324",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets\under_construction.png": "6f029f00284d0e2deed421b580f666df",
"/index.html": "4f081593f2d939f54e59dab889624ee1",
"/main.dart.js": "bbe03f68b47c1c3bfec1af0e274031e9",
"/main.dart.js.deps": "05dc1273ea9f1ee7fbe186b1d3722019"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
