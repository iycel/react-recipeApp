import React, { useState } from "react";
import { Hamburger, Logo, Nav, Menu, MenuLink } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [github, setGithub] = useState("");

  const openHamburger = () => setOpen(!open);

  const openGithub = () => {
    return setGithub(
      (window.location.href = "https://github.com/iycel/react-recipe_app")
    );
  };

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
        <MenuLink onClick={openGithub} to={github} target="_blank">
          Githubb
        </MenuLink>
        <MenuLink
          onClick={openHamburger}
          to="/"
          onMouseUp={() => sessionStorage.clear()}
        >
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
