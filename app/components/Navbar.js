import React from "react";
import FacebookIcon from "../icons/FacebookIcon";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <FacebookIcon />
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

export default Navbar;
