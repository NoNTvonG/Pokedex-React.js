import React from "react";
import "../../../variables.scss";
import STL from "./NavBar.module.scss";
import Logo from "../../images/pokeball-logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className={STL.navBar}>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
        <p>Pokedex</p>
      </NavLink>
    </nav>
  );
}

export default NavBar;
