/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // buildExcludes: [/middleware-manifest\.json$/],
  // fallbacks: { image: "/offline.png", document: "/offline.html" },
  // cacheStartUrl: false,
  // runtimeCaching: [
  //   {
  //     urlPattern: /\/api\/todoitem/,
  //     handler: "StaleWhileRevalidate",
  //     method: "GET",
  //     options: {
  //       cacheName: "todoApp-api",
  //       expiration: { maxEntries: 64, maxAgeSeconds: 24 * 60 * 60 },
  //     },
  //   },
  // {
  //   urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
  //   handler: "CacheFirst",
  //   options: {
  //     cacheName: "google-fonts",
  //     expiration: { maxEntries: 4, maxAgeSeconds: 365 * 24 * 60 * 60 },
  //   },
  // },
  // ],
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  // env: { NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL },
});
