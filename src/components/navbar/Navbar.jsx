import React, { useState } from "react";
import { Hamburger, Logo, Nav, Menu, MenuLink } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openHamburger = () => setOpen(!open);

  return (
    <Nav>
      <Logo to="/home" onClick={() => setOpen(false)}>
        <i>{"< Awkward />"}</i>
        <span> recipe</span>
      </Logo>
      <Hamburger onClick={openHamburger}>
        {/* <span />
        <span />
        <span /> */}
        <GiHamburgerMenu />
      </Hamburger>
      <Menu sendOpen={open}>
        <MenuLink onClick={openHamburger} to="/about">
          About
        </MenuLink>
        <MenuLink onClick={openHamburger} to="/github">
          Github
        </MenuLink>
        <MenuLink onClick={openHamburger} to="/">
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
