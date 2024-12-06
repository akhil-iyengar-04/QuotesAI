/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export for GitHub Pages
  basePath: "/QuotesAI", // Replace with your repo name
  assetPrefix: "/QuotesAI", // Ensure assets are loaded from the correct path
  trailingSlash: true, // Adds trailing slashes for static files
};

module.exports = nextConfig;