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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "07ce54b90a806b0abdd2cb667110d985"
  },
  {
    "url": "assets/css/0.styles.4f413ec3.css",
    "revision": "5baf3312a104b828cf01a6121a0e9150"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.0fcaff8e.js",
    "revision": "178722e907717d371dac966e94c93e22"
  },
  {
    "url": "assets/js/3.44e78238.js",
    "revision": "fa33cfe93ceb87d5464f8b435ac7777d"
  },
  {
    "url": "assets/js/4.db806ec4.js",
    "revision": "4e0e6150ddec1f30beadeccd8cd4555e"
  },
  {
    "url": "assets/js/5.58d36052.js",
    "revision": "b4675a298e3ae0a5e556df8becfbf542"
  },
  {
    "url": "assets/js/6.7b9fd4b0.js",
    "revision": "73aadc5879f6588a4199ae330a2112e6"
  },
  {
    "url": "assets/js/7.eeceb55f.js",
    "revision": "a25e6437db2cc3eb9cdc6ed7e819896e"
  },
  {
    "url": "assets/js/8.829bff3b.js",
    "revision": "b5e99e94c62c886d65d2b3fd9a2c3fea"
  },
  {
    "url": "assets/js/app.97a0b7b7.js",
    "revision": "7d7271aa5f3f80c1aa10c7642990dadd"
  },
  {
    "url": "de/index.html",
    "revision": "8a08a2d7c0c5b703a389e30e4c71806e"
  },
  {
    "url": "index.html",
    "revision": "8b8e17d104cacae906000fd2008b3551"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
