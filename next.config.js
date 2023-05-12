/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
    // runtime: 'experimental-edge',
    // turbo: true,
  }
};

module.exports = nextConfig;
