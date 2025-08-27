import withPWA from "next-pwa";

export default withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
