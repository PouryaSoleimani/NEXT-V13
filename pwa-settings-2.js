/* eslint @typescript-eslint/no-require-imports: 0 */ // --> OFF

/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");

const path = require("path");

const isDev = process.env.NODE_ENV !== "production";

const withPWA = require("next-pwa")({
   dest: "public",
   register: true,
   skipWaiting: true,
   runtimeCaching,
   buildExcludes: ["app-build-manifest.json"],
   reloadOnOnline: true,
   disable: process.env.NODE_ENV === "development",
});

const generateAppDirEntry = (entry) => {
   const packagePath = require.resolve("next-pwa");
   const packageDirectory = path.dirname(packagePath);
   const registerJs = path.join(packageDirectory, "register.js");

   return entry().then((entries) => {
      if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
         if (Array.isArray(entries["main-app"])) {
            entries["main-app"].unshift(registerJs);
         } else if (typeof entries["main-app"] === "string") {
            entries["main-app"] = [registerJs, entries["main-app"]];
         }
      }

      return entries;
   });
};

const nextConfig = {
   reactStrictMode: false,

   webpack(config) {
      if (!isDev) {
         const entry = generateAppDirEntry(config.entry);
         config.entry = () => entry;
      }

      const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".inline.svg"));

      config.module.rules.push(
         // Reapply the existing rule, but only for svg imports ending in ?url
         {
            ...fileLoaderRule,
            test: /\.inline.svg$/i,
            resourceQuery: /url/, // *.inline.svg?url
         },
         // Convert all other *.inline.svg imports to React components
         {
            test: /\.inline.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: {
               not: [...fileLoaderRule.resourceQuery.not, /url/],
            }, // exclude if *.inline.svg?url
            use: ["@svgr/webpack"],
         }
      );

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.inline.svg$/i;

      return config;
   },
   env: {
      NEXT_PUBLIC_CORE_FILES_URL: process.env.NEXT_PUBLIC_CORE_FILES_URL,
      NEXT_PUBLIC_FILES_URL: process.env.NEXT_PUBLIC_FILES_URL,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      NEXT_PUBLIC_PY_URL: process.env.NEXT_PUBLIC_PY_URL,
      NEXT_PUBLIC_SESSION_DOMAIN: process.env.NEXT_PUBLIC_SESSION_DOMAIN,
      NEXT_PUBLIC_SESSION_COOKIE: process.env.NEXT_PUBLIC_SESSION_COOKIE,
      NEXT_PUBLIC_VERSION: process.env.NEXT_PUBLIC_VERSION,
      NEXT_PUBLIC_LANDING_MODE: process.env.NEXT_PUBLIC_LANDING_MODE,
      NEXT_PRIVATE_BUILD_WORKER: "wasm",
   },
   experimental: {
      // reactCompiler: { compilationMode: 'annotation', },
      optimizePackageImports: ["@react-pdf/renderer", "@react-pdf", "react-icons", "xlsx"],
      // forceSwcTransforms: true,
   },
   // turbopack: {
   // 	rules: {
   // 		'*.inline.svg': {
   // 			loaders: ['@svgr/webpack'],
   // 			as: '*.js',
   // 		},
   // 	},
   // },
   images: {
      unoptimized: false,
      remotePatterns: [
         { protocol: "http", hostname: "**" },
         { protocol: "https", hostname: "**" },
      ],
   },
};

module.exports = withPWA(nextConfig);
