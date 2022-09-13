import React from "react";
import logo from "../../assets/images/logo.svg";
import "./index.css";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <img src={logo} className="nav-logo" alt="logo" />
        <ul className="nav-items">
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
