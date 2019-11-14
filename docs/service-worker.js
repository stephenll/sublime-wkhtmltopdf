/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ece67bcc16fefb15d04dc7b4c26a9f99"
  },
  {
    "url": "assets/css/0.styles.3139140e.css",
    "revision": "ea8db2e09878d1af3972ad6db1c60f40"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.543d1eb8.js",
    "revision": "556704b0248d83c49ba56bb73a4523a2"
  },
  {
    "url": "assets/js/3.83e5ae57.js",
    "revision": "93db89bd8de57c7ff1451addd1281649"
  },
  {
    "url": "assets/js/4.99ff522a.js",
    "revision": "22ee1cfcbd6bde92b7fe1e565a662a37"
  },
  {
    "url": "assets/js/5.ed5faa6b.js",
    "revision": "d7b2c548e58172d6c96e18ee076bd0a5"
  },
  {
    "url": "assets/js/6.d4ce0f4c.js",
    "revision": "ff661b09539fd8162602bd886b2d7a34"
  },
  {
    "url": "assets/js/7.9b2a4b68.js",
    "revision": "d03fef68e65a11c43f8c2536f29a47ff"
  },
  {
    "url": "assets/js/8.f151c506.js",
    "revision": "14f23a9463bff91886bdab4d32c4ca14"
  },
  {
    "url": "assets/js/app.fe623d3a.js",
    "revision": "57987821f1ad007ec9dc38151289c7f7"
  },
  {
    "url": "de/index.html",
    "revision": "6e356ec8b6c5310ecca89cfdfdb583dd"
  },
  {
    "url": "index.html",
    "revision": "70f303f3c329bd88ae6daf3c54b930f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
