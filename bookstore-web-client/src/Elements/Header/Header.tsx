import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: white;
  top: 0;
`;

const HeaderImage = styled.img`
  width: 200px;
`;

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

const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <HeaderImage src="/img/bookstore-logo.jpg" />
      <MainMenu>
        <a href="#">Categories</a>
        <a href="#">Favorites</a>
        <a href="#">Profile</a>
      </MainMenu>
    </HeaderContainer>
  );
};

export default Header;
