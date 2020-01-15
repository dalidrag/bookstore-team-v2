"use strict";

const eslintFormatter = require("@ateam/react-dev-utils/eslintFormatter");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

const paths = require("./paths");

module.exports = {
  // 1
  entry: [require.resolve("./polyfills.js"), paths.appIndexJs],
  mode: "production",
  bail: true,
  devtool: "source-map",
  // 4
  module: {
    rules: [
      // eslint
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        enforce: "pre",
        use: [
          {
            loader: require.resolve("eslint-loader"),
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve("eslint"),
              fix: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  // 2
  output: {
    path: paths.appBuild,
    publicPath: paths.publicUrl,
    filename: "bundle.js"
  },
  plugins: [
    // generate index.html file
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};
