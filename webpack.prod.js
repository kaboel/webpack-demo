const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
});
