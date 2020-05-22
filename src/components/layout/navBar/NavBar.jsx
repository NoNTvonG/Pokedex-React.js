import React from "react";
import "../../../variables.scss";
import STL from "./NavBar.module.scss";
import Logo from "../../images/pokeball-logo.png";

function NavBar() {
  return (
    <nav className={STL.navBar}>
      <img src={Logo} alt="logo" />
      <p>Pokedex</p>
    </nav>
  );
}

export default NavBar;
