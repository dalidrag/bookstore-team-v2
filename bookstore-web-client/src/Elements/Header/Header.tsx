import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import CSSVariables from "../../global-styles/variables";

import CustomSelect from "../CustomSelect/CustomSelect";
import Option from "../CustomSelect/Option";

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1200px;
  height: ${CSSVariables.headerHeight};
  background-color: white;
  top: 0;
  padding-bottom: ${CSSVariables.headerBottomPadding};
`;
HeaderContainer.displayName = "HeaderContainer";

const HeaderImage = styled.img`
  width: 200px;
`;
HeaderImage.displayName = "HeaderImage";

const MainMenu = styled.nav`
  display: flex;
  width: 300px;
  justify-content: space-between;
  position: relative;
  left: 0;
  top: 0;

  > * {
    color: black;
    text-decoration: none;
    font-size: 18px;
  }
`;
MainMenu.displayName = "MainMenu";

const PositionedSelect = styled(CustomSelect)`
  position: absolute;
  right: 0;
  top: 0;
`;

type Props = {
  lang?: string;
};

const Header: React.FunctionComponent<Props> = props => {
  return (
    <HeaderContainer lang={props.lang}>
      <HeaderImage src="/img/bookstore-logo.jpg" alt="Bookstore Logo" />
      <MainMenu role="menubar" aria-labelledby="Main menu" tabindex="0">
        <a href="#">
          <FormattedMessage id="header.categories" />
        </a>
        <a href="#">
          <FormattedMessage id="header.wishList" />
        </a>
        <a href="#">
          <FormattedMessage id="header.profile" />
        </a>
      </MainMenu>
      <PositionedSelect label="Custom Select">
        <Option value="Apple">Option 1</Option>
        <Option value="Orange">Option 2</Option>
        <Option value="Apple & Orange">Option 3</Option>
      </PositionedSelect>
    </HeaderContainer>
  );
};
Header.propTypes = {
  lang: PropTypes.string
};
Header.defaultProps = {
  lang: "en"
};

export default Header;
