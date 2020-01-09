import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { Component } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";

type Props = {
  text: string;
  times: number;
};

const Index: React.FunctionComponent<Props> = props => {
  const paragraphs = [];
  for (let i = 0; i < props.times; ++i) {
    paragraphs.push(<p>{props.text}</p>);
  }
  return <div>{paragraphs}</div>;
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
