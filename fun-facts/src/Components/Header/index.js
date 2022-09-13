import React from "react";
import logo from "C:/Users/Paula/Desktop/Cursos/GitHub/JS-React/fun-facts/src/assets/logo.png";
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
