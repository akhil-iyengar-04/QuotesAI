/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static export for deployment
  assetPrefix: '/', // Required for compatibility with `next/font`
};

module.exports = nextConfig;
