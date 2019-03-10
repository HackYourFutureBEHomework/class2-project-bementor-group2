import React, { Component } from "react";
import "./index.css";
import bg from "./pattern.gif";

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
      <div>
        <div className="container">
          {/*<img src={bg} />*/}
          <div className="centered">BeMentor</div>
        </div>
        <header>
          <div className="topnav" id="myTopnav">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#login">LOGIN</a>
            <a href="#contact">CONTACT</a>
            <a href="#connect">CONNECT</a>
            <a
              href="javascript:void(0);"
              className="icon"
              onClick={this.myFunction}
            >
              <i className="fa fa-bars" />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
