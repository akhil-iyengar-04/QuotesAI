const nextConfig = {
  output: "export",
  basePath: "/QuotesAI", // Matches your repository name
  assetPrefix: "/QuotesAI/", // Prefix for static assets
  trailingSlash: true, // Ensures /about becomes /about/index.html
};

module.exports = nextConfig;
