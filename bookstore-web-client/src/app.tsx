import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IntlProvider } from "react-intl";

import Header from "./Elements/Header/Header";

import CSSVariables from "./global-styles/variables";
import messages from "./messages";

const ViewContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const MainContainer = styled.main`
  margin-top: calc(
    ${CSSVariables.headerHeight} + ${CSSVariables.headerBottomPadding}
  );
`;

type Props = {
  text: string;
  times: number;
  lang: string;
};

const App: React.FunctionComponent<Props> = props => {
  const paragraphs: Array<JSX.Element> = [];
  for (let i = 0; i < props.times; ++i) {
    paragraphs.push(<p key={i}>{props.text}</p>);
  }

  return (
    <IntlProvider locale={props.lang} messages={messages[props.lang]}>
      <ViewContainer>
        <Header lang={props.lang} />
        <MainContainer>
          <div>{paragraphs}</div>
        </MainContainer>
      </ViewContainer>
    </IntlProvider>
  );
};

App.propTypes = {
  text: PropTypes.string.isRequired,
  times: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired
};

export default App;
