import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

import GlobalFonts from "../../fonts/fonts";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <GlobalFonts />
            KH
          </NavLogo>
          <MenuIcon onClick={toggle}>
            <FaBars />
          </MenuIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">SERVICES</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">PROJECTS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blog">BLOG</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
