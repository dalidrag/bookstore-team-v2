import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Index extends Component {
  constructor(props) {
    super(props);
  }

  title: string = "Linted TypeScript for React";

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return <div>{this.title}</div>;
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
