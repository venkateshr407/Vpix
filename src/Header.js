import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  height: auto;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const Text = styled.h2`
  font-size: 16px;
  margin: 0;
  color: #000;
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`;

const MenuLink = styled.a`
  color: white;
`;

function Header() {
  return (
    <Nav className="container">
      <NavHeader>
        <MenuLink href="/">VPIX</MenuLink>
        <NavRight>
          <MenuLink href="search">
            <Text>Search</Text>
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}

export default Header;
