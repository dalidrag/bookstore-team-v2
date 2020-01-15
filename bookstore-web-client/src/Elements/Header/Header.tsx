import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import CSSVariables from "../../global-styles/variables";

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
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

type Props = {
  lang?: string;
};

const Header: React.FunctionComponent<Props> = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

Header.defaultProps = {
  lang: "en"
};

export default Header;
