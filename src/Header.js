import React from 'react';
import styled from 'styled-components';
// import SearchBar from './Component/SearchBar';
// import { ReactComponent as Explore } from '../explore.svg';
// import { ReactComponent as Avatar } from '../avatar.svg';
// import { ReactComponent as Compass } from '../compass.svg';
 
const Nav = styled.div`
  background-color: transparent;
  height: auto;
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
 
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;
 
const Text =styled.h2`
  font-size:16px;
  margin:0;
  color:black;
`;
 
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
 
  svg {
    margin-right: 20px;
  }
`;
 
const MenuLink = styled.a``;
 
function Header(props) {
  return (
    <Nav>
      <NavHeader>
      <MenuLink href="/">
        Vpix
      </MenuLink>
      
 
        <NavRight>
          <MenuLink href="search">
            <Text>About</Text>
            {/* <Compass /> */}
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}
 
export default Header;