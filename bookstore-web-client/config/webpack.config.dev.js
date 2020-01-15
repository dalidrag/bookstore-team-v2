const eslintFormatter = require("@ateam/react-dev-utils/eslintFormatter");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const { DefinePlugin } = require("webpack");

const paths = require("./paths");

module.exports = {
  // 1
  entry: [
    require.resolve("./polyfills"),
    require.resolve("webpack-hot-middleware/client"),
    paths.appIndexJs
  ],
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
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  // 2
  output: {
    path: path.join(__dirname, paths.appPublic),
    publicPath: paths.publicUrl,
    filename: "bundle.js"
  },
  // 3
  devServer: {
    contentBase: paths.appPublic,
    hot: true
  },
  plugins: [
    // generate index.html file
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};
