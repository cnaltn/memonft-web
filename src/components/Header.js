import React from "react";
import styled from "styled-components";
import navLogo from "../image/navLogo.png";

import "./header.css";

const Container = styled.div``;

const Navbar = styled.div``;

const NavLogo = styled.div``;

const NavInput = styled.div``;

const NavItems = styled.div``;

//Styling

const Header = () => {
  return (
    <Container className="navContainer">
      <Navbar className="navbar">
        <NavLogo className="navLogo">
          <img alt="navLogo1" src={navLogo}></img>
          <h1 className="logoNav">MEMONFT</h1>
        </NavLogo>
        <NavInput>
          <input
            type="text"
            placeholder="Search items, collections and accounts"
            className="input"
          ></input>
        </NavInput>
        <NavItems className="navItems">
          <a href="#a">Explore</a>
          <a href="#a">Activity</a>
          <a href="#a">Resources</a>
          <a className="a-button" href="#a">
            Account
          </a>
          <a className="w-button" href="#a">
            Connect Wallet
          </a>
        </NavItems>
      </Navbar>
    </Container>
  );
};

export default Header;
export { navLogo };
