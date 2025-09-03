/** @type {import('next').NextConfig} */
const path = require("path");

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
  //   {
  //     urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
  //     handler: "CacheFirst",
  //     options: {
  //       cacheName: "google-fonts",
  //       expiration: { maxEntries: 4, maxAgeSeconds: 365 * 24 * 60 * 60 },
  //     },
  //   },
  // ],
});

module.exports = withPWA({
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((one) => {
          if (one.use) {
            // اطمینان از اینکه همیشه آرایه باشه
            const uses = Array.isArray(one.use) ? one.use : [one.use];
            uses.forEach((u) => {
              if (u.loader && u.loader.includes("css-loader")) {
                u.options = { ...u.options, url: false };
              }
            });
          }
        });
      }
    });
    return config;
  },

  images: {
    remotePatterns: [],
  },
});
