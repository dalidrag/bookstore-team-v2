"use strict";

const path = require("path");
const fs = require("fs");

// set environment
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

// exit on unhandled rejections
process.on("unhandledRejection", err => {
  throw err;
});

const chalk = require("chalk");
const webpack = require("webpack");
const express = require("express");

const WebpackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");
const clearConsole = require("@ateam/react-dev-utils/clearConsole");
const formatWebpackMessages = require("@ateam/react-dev-utils/formatWebpackMessages");
const { choosePort } = require("@ateam/react-dev-utils/WebpackDevServerUtils");

const config = require("../../config/webpack.config.dev.js");
const paths = require("../../config/paths.js");

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const isInteractive = process.stdout.isTTY;

if (process.env.HOST) {
  console.log(
    chalk.cyan(
      `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold(process.env.HOST)
      )}`
    )
  );
  console.log(
    `If this was unintentional, check that you haven't mistakenly set it in your shell.`
  );
  console.log(`Learn more here: ${chalk.yellow("http://bit.ly/2mwWSwH")}`);
  console.log();
}

choosePort(HOST, DEFAULT_PORT)
  .then(port => {
    if (port == null) {
      return;
    }

    // create webpack compiler
    let compiler;
    try {
      compiler = webpack(config);
    } catch (err) {
      console.log(chalk.red("Failed to compile."));
      console.log();
      console.log(err.message || err);
      console.log();
      process.exit(1);
    }

    // on webpack invalidation display pending status
    compiler.plugin("invalid", () => {
      if (isInteractive) {
        clearConsole();
      }
      console.log("Compiling...");
    });

    // on webpack compile display result status and formatted stats
    compiler.plugin("done", stats => {
      if (isInteractive) {
        clearConsole();
      }

      const messages = formatWebpackMessages(stats.toJson({}, true));
      const isSuccessful = !messages.errors.length && !messages.warnings.length;
      if (isSuccessful) {
        console.log(chalk.green("Compiled successfully!"));
        console.log();
        console.log(chalk.gray(`Listening on http://localhost:${port}`));
        console.log();
      }

      // if errors exist, only show errors
      if (messages.errors.length) {
        console.log(chalk.red("Failed to compile.\n"));
        console.log(messages.errors.join("\n\n"));
        console.log();
        return;
      }

      // show warnings if no errors were found
      if (messages.warnings.length) {
        console.log(chalk.yellow("Compiled with warnings.\n"));
        console.log(messages.warnings.join("\n\n"));
        console.log();
      }
    });

    // initialize dev server
    const devServer = express();

    // configure WebpackDevMiddleware
    devServer.use(
      WebpackDevMiddleware(compiler, {
        compress: true,
        contentBase: "../../public",
        watchContentBase: true,
        publicPath: "/",
        // enable hot reloading
        hot: true,
        // display only error messages, formatted warning stats will be shown in terminal
        logLevel: "error",
        quiet: true,
        // do not watch node_modules
        watchOptions: {
          ignored: /node_modules/
        }
      })
    );

    // configure WebpackHotMiddleware
    devServer.use(WebpackHotMiddleware(compiler));

    // serve files from the public dir
    devServer.use(
      express.static(paths.appPublic, {
        index: false
      })
    );

    // launch webpack dev server
    devServer.listen(port, HOST, err => {
      if (err) {
        return console.log(err);
      }
      if (isInteractive) {
        clearConsole();
      }
      console.log(chalk.cyan("Starting the development server...\n"));
    });

    ["SIGINT", "SIGTERM"].forEach(function(sig) {
      process.on(sig, function() {
        // devServer.close();
        process.exit();
      });
    });
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
