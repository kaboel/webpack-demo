const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Step 3: Inject styles into DOM
          "css-loader", // Step 2: Turns CSS into CommonJS
          "sass-loader", // Step 1: Turns SCSS into CSS
        ],
      },
    ],
  },
};