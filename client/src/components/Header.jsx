import React from "react";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header_image">
        <h1 className="header_title">BE MENTOR</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="#Connect">Connect</Link>
          </li>
          <li>
            <Link to="#Contact">Contact</Link>
          </li>
          <li>
            <Link to="#Login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

  export default Header;