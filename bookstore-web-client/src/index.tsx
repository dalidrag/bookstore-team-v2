import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";

import * as Sentry from "@sentry/browser";

import App from "./app";

if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: "https://4de21220c62649b39a9f6c13e36335fa@sentry.io/1876490"
  });
}

const Index: React.FunctionComponent = () => {
  return <App lang="sr" text="Lorem ipsum." times={40} />;
};

ReactDOM.render(<Index />, document.getElementById("app"));

if (module["hot"]) {
  module["hot"].accept();
}
