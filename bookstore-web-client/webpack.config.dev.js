const eslintFormatter = require("@ateam/react-dev-utils/eslintFormatter");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  // 1
  entry: ["./src/index.tsx", "webpack-hot-middleware/client"],
  mode: "development",
  devtool: "cheap-module-eval-source-map",
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
    extensions: ["*", ".js", ".jsx"]
  },
  // 2
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "bundle.js"
  },
  // 3
  devServer: {
    contentBase: "./public",
    hot: true
  },
  plugins: [
    // generate index.html file
    new HtmlWebpackPlugin({
      inject: true,
      template: "public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
