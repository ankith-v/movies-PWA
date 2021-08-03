module.exports = {
  reactStrictMode: true,
};

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    // scope: "/app",
    // sw: "service-worker.js",
    dest: "public",
    register: true,
    // skipWaiting: true,
  },
});
