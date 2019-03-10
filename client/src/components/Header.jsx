import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Header extends Component {
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  render() {
    return (
      <header>
        <div className="container">
          <div className="centered">BeMentor</div>
        </div>
        <div className="topnav" id="myTopnav">
          <Link to="/login">LOGIN</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/connect">CONNECT</Link>
          <Link to="/home">HOME</Link>
          <a
            href="javascript:void(0);"
            className="icon"
            onClick={this.myFunction}
          >
            <i className="fa fa-bars" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
