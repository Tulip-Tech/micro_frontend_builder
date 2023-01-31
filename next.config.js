const path = require("path");
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV !== "development",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  webpack(config) {
    config.plugins.push(
        new NextFederationPlugin({
          name: 'microEmailBuilder',
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./EbBuilderComponent": "./components/eb-builder/index.tsx",
            "./interfaces": "./library/interfaces.ts"
          },
          shared: {
            // whatever else
          }
        })
    );
    return config;
  }
};

module.exports = nextConfig;
