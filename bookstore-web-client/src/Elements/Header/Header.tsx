import React from "react";
import styled from "styled-components";

import CSSVariables from "../../global-styles/variables";

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: ${CSSVariables.headerHeight};
  background-color: white;
  top: 0;
  padding-bottom: 20px;
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

const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <HeaderImage src="/img/bookstore-logo.jpg" alt="Bookstore Logo" />
      <MainMenu role="menubar">
        <a href="#">Categories</a>
        <a href="#">Wish List</a>
        <a href="#">Profile</a>
      </MainMenu>
    </HeaderContainer>
  );
};

export default Header;
