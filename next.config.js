/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/QuotesAI", // Matches your GitHub repo name
  assetPrefix: "/QuotesAI",
  trailingSlash: true,
};

module.exports = nextConfig;