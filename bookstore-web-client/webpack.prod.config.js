"use strict";

const eslintFormatter = require("@ateam/react-dev-utils/eslintFormatter");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = env => {
  process.env.NODE_ENV = env.NODE_ENV;

  return {
    // 1
    entry: ["./polyfills.js", "./src/index.tsx"],
    mode: "production",
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
      path: __dirname + "/build",
      publicPath: "/",
      filename: "bundle.js"
    },
    plugins: [
      new CleanWebpackPlugin(),
      // generate index.html file
      new HtmlWebpackPlugin({
        inject: true,
        template: "public/index.html",
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
      })
    ]
  };
};
