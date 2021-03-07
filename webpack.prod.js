const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(config, {
  mode: "production",
  output: {
    filename: "static/js/[name].[contenthash].bundle.js",
    path: path.resolve(process.cwd(), "dist"),
  },
  plugins: [new CleanWebpackPlugin()],
});
