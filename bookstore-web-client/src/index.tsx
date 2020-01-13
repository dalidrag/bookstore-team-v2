import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";

import * as Sentry from "@sentry/browser";

import Header from "./Elements/Header/Header";

Sentry.init({
  dsn: "https://4de21220c62649b39a9f6c13e36335fa@sentry.io/1876490"
});

type Props = {
  text: string;
  times: number;
};

const Index: React.FunctionComponent<Props> = props => {
  const paragraphs: Array<JSX.Element> = [];
  for (let i = 0; i < props.times; ++i) {
    paragraphs.push(<p>{props.text}</p>);
  }
  return (
    <div>
      <Header />
      <div>{paragraphs}</div>
    </div>
  );
};

Index.propTypes = {
  text: PropTypes.string.isRequired,
  times: PropTypes.number.isRequired
};

ReactDOM.render(
  <Index text="Lorem ipsum." times={40} />,
  document.getElementById("app")
);

if (module["hot"]) {
  module["hot"].accept();
}
