import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

class Header extends Component {
  myFunction() {
    var x = document.getElementById("myTopnav");
    x.className = x.className === "topnav" ? "topnav responsive" : "topnav";
  }
  render() {
    return (
      <header>
        <div className="header_image">
          <div className="header_title">BeMentor.</div>
        </div>
        <div className="topnav" id="myTopnav">
          <Link to="/login" onClick={this.myFunction}>
            LOGIN
          </Link>
          <Link to="/user" onClick={this.myFunction}>
            USER
          </Link>
          <Link to="/contact" onClick={this.myFunction}>
            CONTACT
          </Link>
          <Link to="/connect" onClick={this.myFunction}>
            CONNECT
          </Link>
          <Link to="/search" onClick={this.myFunction}>
            SEARCH
          </Link>
          <Link to="/home" onClick={this.myFunction}>
            HOME
          </Link>
          <button
            type="button"
            className="link-button icon"
            onClick={this.myFunction}
          >
            <i className="fa fa-bars" />
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
