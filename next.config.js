const withPWA = require('next-pwa')({
  dest: 'public', // مسیر خروجی service worker
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
});
