const withPWA = require("next-pwa")({
  dest: "public", // مسیر خروجی service worker
  register: true,
  skipWaiting: true,
});

export default withPWA({
  reactStrictMode: true,
});
