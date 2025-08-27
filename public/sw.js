if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + ".js", c).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = a), (e.onload = s), document.head.appendChild(e));
        } else ((e = a), importScripts(a), s());
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, t) => {
    const n = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[n]) return;
    let i = {};
    const r = (e) => a(e, n),
      f = { module: { uri: n }, exports: i, require: r };
    s[n] = Promise.all(c.map((e) => f[e] || r(e))).then((e) => (t(...e), i));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  (importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/ScreenShot-Tool-20250808130504.png",
          revision: "845694079832c4f778cfda80e53f653a",
        },
        { url: "/_next/app-build-manifest.json", revision: "99323792bb2715b1e91bb40fdae95777" },
        { url: "/_next/static/chunks/1029-b6e345a333841a3a.js", revision: "b6e345a333841a3a" },
        { url: "/_next/static/chunks/11390db7-11398665b65a1a21.js", revision: "11398665b65a1a21" },
        { url: "/_next/static/chunks/1255-d862cc08c4145aff.js", revision: "d862cc08c4145aff" },
        { url: "/_next/static/chunks/1356-c501e35f57ea7c37.js", revision: "c501e35f57ea7c37" },
        { url: "/_next/static/chunks/1521-203d803a7eb29c3a.js", revision: "203d803a7eb29c3a" },
        { url: "/_next/static/chunks/1646.f9222787e8cf193b.js", revision: "f9222787e8cf193b" },
        { url: "/_next/static/chunks/1929-adf329f9e1a02727.js", revision: "adf329f9e1a02727" },
        { url: "/_next/static/chunks/2619-024c323f8ca0f6aa.js", revision: "024c323f8ca0f6aa" },
        { url: "/_next/static/chunks/2669-5fc603ec3159ae3c.js", revision: "5fc603ec3159ae3c" },
        { url: "/_next/static/chunks/2670.27570fbc3bedffb2.js", revision: "27570fbc3bedffb2" },
        { url: "/_next/static/chunks/3d47b92a-019d0f25831cb0a2.js", revision: "019d0f25831cb0a2" },
        { url: "/_next/static/chunks/4099-fa1da3e635918f45.js", revision: "fa1da3e635918f45" },
        { url: "/_next/static/chunks/4149-6ca5d95b3881cf4e.js", revision: "6ca5d95b3881cf4e" },
        { url: "/_next/static/chunks/41ade5dc-14352437cc7db941.js", revision: "14352437cc7db941" },
        { url: "/_next/static/chunks/4517-fcd322e79aafac9f.js", revision: "fcd322e79aafac9f" },
        { url: "/_next/static/chunks/4909-f5e5a2b9645891bd.js", revision: "f5e5a2b9645891bd" },
        { url: "/_next/static/chunks/4bd1b696-100b9d70ed4e49c1.js", revision: "100b9d70ed4e49c1" },
        { url: "/_next/static/chunks/5125-c8a56503d8993381.js", revision: "c8a56503d8993381" },
        { url: "/_next/static/chunks/5139.bab70807d9ac195a.js", revision: "bab70807d9ac195a" },
        { url: "/_next/static/chunks/5584.cac63017cd670534.js", revision: "cac63017cd670534" },
        { url: "/_next/static/chunks/5845-a2a4155e3f9f6688.js", revision: "a2a4155e3f9f6688" },
        { url: "/_next/static/chunks/6007-20ae96da184fb3f7.js", revision: "20ae96da184fb3f7" },
        { url: "/_next/static/chunks/6107-fd2edbbd26c062f9.js", revision: "fd2edbbd26c062f9" },
        { url: "/_next/static/chunks/6184.5f198a25a8802752.js", revision: "5f198a25a8802752" },
        { url: "/_next/static/chunks/6512-e402e75513835f7d.js", revision: "e402e75513835f7d" },
        { url: "/_next/static/chunks/6652-d572b2c1ceecaf1c.js", revision: "d572b2c1ceecaf1c" },
        { url: "/_next/static/chunks/66ec4792-f572f732ab5bb2ce.js", revision: "f572f732ab5bb2ce" },
        { url: "/_next/static/chunks/6743-4e5081a72b20da8d.js", revision: "4e5081a72b20da8d" },
        { url: "/_next/static/chunks/6930-1ba2b2ac06c2476a.js", revision: "1ba2b2ac06c2476a" },
        { url: "/_next/static/chunks/7064611b-fd15d9bba16db310.js", revision: "fd15d9bba16db310" },
        { url: "/_next/static/chunks/7333-ad64e8dd07ac52e6.js", revision: "ad64e8dd07ac52e6" },
        { url: "/_next/static/chunks/7522-9b524e107be347e3.js", revision: "9b524e107be347e3" },
        { url: "/_next/static/chunks/8769-215dc1b9d633de06.js", revision: "215dc1b9d633de06" },
        { url: "/_next/static/chunks/8813-c8f9fc104235c5f6.js", revision: "c8f9fc104235c5f6" },
        { url: "/_next/static/chunks/8886-c733127ffc3f1107.js", revision: "c733127ffc3f1107" },
        { url: "/_next/static/chunks/9027-cbe00a29036225a8.js", revision: "cbe00a29036225a8" },
        { url: "/_next/static/chunks/9047-cccea9b377412d31.js", revision: "cccea9b377412d31" },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/home/page-ef541170da7feaab.js",
          revision: "ef541170da7feaab",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-08992ab8696c521c.js",
          revision: "08992ab8696c521c",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/axios/page-e67d3fe8c51643ab.js",
          revision: "e67d3fe8c51643ab",
        },
        {
          url: "/_next/static/chunks/app/clientcomponent/page-34b7e3e2ec8691cd.js",
          revision: "34b7e3e2ec8691cd",
        },
        {
          url: "/_next/static/chunks/app/courses/%5BcourseID%5D/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/courses/page-cc60626467bb6008.js",
          revision: "cc60626467bb6008",
        },
        {
          url: "/_next/static/chunks/app/custom-hooks/page-56ddfb45dca4cafb.js",
          revision: "56ddfb45dca4cafb",
        },
        {
          url: "/_next/static/chunks/app/dnd-kit/page-301b090b555352de.js",
          revision: "301b090b555352de",
        },
        {
          url: "/_next/static/chunks/app/dnd-kit/sortable/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        { url: "/_next/static/chunks/app/error-eae0e71e0b04c42d.js", revision: "eae0e71e0b04c42d" },
        {
          url: "/_next/static/chunks/app/formik/page-e2fc496b6453b883.js",
          revision: "e2fc496b6453b883",
        },
        {
          url: "/_next/static/chunks/app/headless-ui/page-3afa139e9a8311a6.js",
          revision: "3afa139e9a8311a6",
        },
        {
          url: "/_next/static/chunks/app/image/page-b1fbaf29a24f74f0.js",
          revision: "b1fbaf29a24f74f0",
        },
        {
          url: "/_next/static/chunks/app/json-server/page-32e0e1b534b684ed.js",
          revision: "32e0e1b534b684ed",
        },
        {
          url: "/_next/static/chunks/app/layout-69879708b53c277d.js",
          revision: "69879708b53c277d",
        },
        {
          url: "/_next/static/chunks/app/loading-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/lodash/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/multi-date-picker/page-060e6cba68933469.js",
          revision: "060e6cba68933469",
        },
        {
          url: "/_next/static/chunks/app/nest/%5BID%5D/page-496ea58be563944d.js",
          revision: "496ea58be563944d",
        },
        {
          url: "/_next/static/chunks/app/nest/form/%5Bid%5D/page-8135b99059261d15.js",
          revision: "8135b99059261d15",
        },
        {
          url: "/_next/static/chunks/app/nest/page-e0b2fe56d5f4ac34.js",
          revision: "e0b2fe56d5f4ac34",
        },
        {
          url: "/_next/static/chunks/app/not-found-cc60626467bb6008.js",
          revision: "cc60626467bb6008",
        },
        {
          url: "/_next/static/chunks/app/otp/page-4f011e9c1cc8ed23.js",
          revision: "4f011e9c1cc8ed23",
        },
        { url: "/_next/static/chunks/app/page-97d9dbf7a3ccef6f.js", revision: "97d9dbf7a3ccef6f" },
        {
          url: "/_next/static/chunks/app/product-not-found/page-33dc17d921c8d193.js",
          revision: "33dc17d921c8d193",
        },
        {
          url: "/_next/static/chunks/app/products/%5BproductID%5D/loading-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/products/%5BproductID%5D/page-632f7746840046a1.js",
          revision: "632f7746840046a1",
        },
        {
          url: "/_next/static/chunks/app/products/page-cc60626467bb6008.js",
          revision: "cc60626467bb6008",
        },
        {
          url: "/_next/static/chunks/app/pwa/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/react-hook-form/form-provider/page-f1def026501e4049.js",
          revision: "f1def026501e4049",
        },
        {
          url: "/_next/static/chunks/app/react-hook-form/page-4e9e55c422de1156.js",
          revision: "4e9e55c422de1156",
        },
        {
          url: "/_next/static/chunks/app/react-hook-form/practice/page-ce68da5b5323b820.js",
          revision: "ce68da5b5323b820",
        },
        {
          url: "/_next/static/chunks/app/react-hook-form/use-field-array/page-420b5fdf34083ead.js",
          revision: "420b5fdf34083ead",
        },
        {
          url: "/_next/static/chunks/app/react-hook-form2/page-7ba2e7fce3569f3e.js",
          revision: "7ba2e7fce3569f3e",
        },
        {
          url: "/_next/static/chunks/app/react-hook-form2/second/page-1c3e932d2d8f4fdf.js",
          revision: "1c3e932d2d8f4fdf",
        },
        {
          url: "/_next/static/chunks/app/react-pdf-2/page-b1b900b049b8c23b.js",
          revision: "b1b900b049b8c23b",
        },
        {
          url: "/_next/static/chunks/app/react-pdf/download/page-0914210388f4ed2d.js",
          revision: "0914210388f4ed2d",
        },
        {
          url: "/_next/static/chunks/app/react-pdf/page-2b79b86d43f1bf03.js",
          revision: "2b79b86d43f1bf03",
        },
        {
          url: "/_next/static/chunks/app/react-pdf/preview/page-70357b13b70733c4.js",
          revision: "70357b13b70733c4",
        },
        {
          url: "/_next/static/chunks/app/react-query/alldatas/page-9a4f6fd99128a1da.js",
          revision: "9a4f6fd99128a1da",
        },
        {
          url: "/_next/static/chunks/app/react-query/layout-e9353156cab722d9.js",
          revision: "e9353156cab722d9",
        },
        {
          url: "/_next/static/chunks/app/react-query/mutation/page-9de0c0d5414192e3.js",
          revision: "9de0c0d5414192e3",
        },
        {
          url: "/_next/static/chunks/app/react-query/page-811d2543efa250d6.js",
          revision: "811d2543efa250d6",
        },
        {
          url: "/_next/static/chunks/app/react-spinners/page-b03eac659244374d.js",
          revision: "b03eac659244374d",
        },
        {
          url: "/_next/static/chunks/app/recharts/page-e855d3e81b5561f5.js",
          revision: "e855d3e81b5561f5",
        },
        {
          url: "/_next/static/chunks/app/remeda/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/search/%5B...search%5D/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/servercomponent/form/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/servercomponent/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/shad-cn/page-2208f97e268e9141.js",
          revision: "2208f97e268e9141",
        },
        {
          url: "/_next/static/chunks/app/styled-components/page-f63cde07db36c244.js",
          revision: "f63cde07db36c244",
        },
        {
          url: "/_next/static/chunks/app/sweet-alert/page-4a499abb7cbb8fe2.js",
          revision: "4a499abb7cbb8fe2",
        },
        {
          url: "/_next/static/chunks/app/swr/fake-store/%5Bslug%5D/page-a337658d07ff22f7.js",
          revision: "a337658d07ff22f7",
        },
        {
          url: "/_next/static/chunks/app/swr/fake-store/page-9625127b8f2b09f9.js",
          revision: "9625127b8f2b09f9",
        },
        {
          url: "/_next/static/chunks/app/swr/page-0ac258281fd8e3f6.js",
          revision: "0ac258281fd8e3f6",
        },
        {
          url: "/_next/static/chunks/app/swr/pagination/page-0ba1e0968610fdd1.js",
          revision: "0ba1e0968610fdd1",
        },
        {
          url: "/_next/static/chunks/app/swr/products/page-50449342172ee14b.js",
          revision: "50449342172ee14b",
        },
        {
          url: "/_next/static/chunks/app/swr/swr-advanced.tsx/page-dd0197549eaa4fcb.js",
          revision: "dd0197549eaa4fcb",
        },
        {
          url: "/_next/static/chunks/app/theme-context/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/theme-test/page-97d9dbf7a3ccef6f.js",
          revision: "97d9dbf7a3ccef6f",
        },
        {
          url: "/_next/static/chunks/app/todo-list/page-612fc2b3c8f5820e.js",
          revision: "612fc2b3c8f5820e",
        },
        {
          url: "/_next/static/chunks/app/ts/page-e20d4c3d455677c9.js",
          revision: "e20d4c3d455677c9",
        },
        {
          url: "/_next/static/chunks/app/typescript/page-56f7b35d195e0a0c.js",
          revision: "56f7b35d195e0a0c",
        },
        {
          url: "/_next/static/chunks/app/zustand-training/page-f58ccd9315e829b0.js",
          revision: "f58ccd9315e829b0",
        },
        {
          url: "/_next/static/chunks/app/zustand-training/zustand-page-2/page-215c8c0ebd491548.js",
          revision: "215c8c0ebd491548",
        },
        { url: "/_next/static/chunks/b2d98e07-cd1c888eb2fca543.js", revision: "cd1c888eb2fca543" },
        { url: "/_next/static/chunks/c16f53c3-409df1246fc2628c.js", revision: "409df1246fc2628c" },
        { url: "/_next/static/chunks/e37a0b60-be670849e64a697f.js", revision: "be670849e64a697f" },
        { url: "/_next/static/chunks/ff804112-054e22aa82036647.js", revision: "054e22aa82036647" },
        { url: "/_next/static/chunks/framework-9cf8fdd6867d6a80.js", revision: "9cf8fdd6867d6a80" },
        { url: "/_next/static/chunks/main-app-7866ddf03cfb98d8.js", revision: "7866ddf03cfb98d8" },
        { url: "/_next/static/chunks/main-ec2b0c1c291d7dfe.js", revision: "ec2b0c1c291d7dfe" },
        {
          url: "/_next/static/chunks/pages/_app-e91d44151749b25d.js",
          revision: "e91d44151749b25d",
        },
        {
          url: "/_next/static/chunks/pages/_error-d5437e6632e42397.js",
          revision: "d5437e6632e42397",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        { url: "/_next/static/chunks/webpack-397da39e47c66c7b.js", revision: "397da39e47c66c7b" },
        { url: "/_next/static/css/1cf7e39c8b9895b4.css", revision: "1cf7e39c8b9895b4" },
        { url: "/_next/static/css/c326eafe44655b34.css", revision: "c326eafe44655b34" },
        {
          url: "/_next/static/media/4b657decd6407698-s.p.woff2",
          revision: "172657bcab0d8fa8ef797ecdf0fb33b7",
        },
        {
          url: "/_next/static/media/573cbd3e993edffe-s.woff2",
          revision: "128e93b60145762a3dbd55c27d654331",
        },
        {
          url: "/_next/static/media/67695be07a46cf4c-s.woff2",
          revision: "644fcd1dda36ec2c9564b7c30ac97a9d",
        },
        {
          url: "/_next/static/media/7e5a5c10421db7a0-s.woff2",
          revision: "b3028841d684078385b1004878906b9c",
        },
        {
          url: "/_next/static/media/ab2e3a11646b0499-s.p.woff2",
          revision: "83636f24aacb72640d76120c7037457c",
        },
        {
          url: "/_next/static/media/bcc69932347c6777-s.woff2",
          revision: "781558f6d199bb8a9ff2dd5dd0bacfb1",
        },
        {
          url: "/_next/static/qeCwI6TfYd9TbKwda8VA4/_buildManifest.js",
          revision: "7ec90bcc4610abe7e0bc10234afec601",
        },
        {
          url: "/_next/static/qeCwI6TfYd9TbKwda8VA4/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/favicon-32x32.png", revision: "eb0a01cfe292d7263fa89b651338e993" },
        { url: "/favicon.ico", revision: "7064a753df488c4e40d32f2959938acc" },
        { url: "/fonts/Vazir-Bold-UI.ttf", revision: "ae29baaa0768819558c0b12d94f26972" },
        { url: "/fonts/Vazir-Regular-FD-WOL.woff", revision: "b563ae8dbf7a60b4f2e11384129f8d4b" },
        { url: "/fonts/Vazir-Regular-FD-WOL.woff2", revision: "7f0a4f16c0c5c70f83acf9fe4e5eb032" },
        { url: "/images/cartoonNature.avif", revision: "e725dfedbe78bd349c3bb3dde85fb246" },
        { url: "/images/cartoonNature.jpg", revision: "baa043895a9308d87cd107b4e6dbf7c1" },
        { url: "/images/england.svg", revision: "606eb9b5a28b07aba4dd3bcca65408ff" },
        { url: "/images/iphone_15_promax.jpg", revision: "b85944556f57a709808bc3c6189d8964" },
        { url: "/images/iran.svg", revision: "92d5a7925caed978b242af329f1c6d57" },
        { url: "/images/saudi-arabia.svg", revision: "8ced16b549a9a318dbcfacfa3d773755" },
        { url: "/manifest.json", revision: "7abc1f94cfb8713b5e1519bafa45ba1e" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: c }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      "GET"
    ));
});
