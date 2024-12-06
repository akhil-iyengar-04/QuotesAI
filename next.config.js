const nextConfig = {
  output: "export",
  basePath: "/QuotesAI",
  assetPrefix: "/QuotesAI/",
  trailingSlash: true,
  webpack(config) {
    console.log("Building with assetPrefix:", config.output.publicPath);
    return config;
  },
};

module.exports = nextConfig;
