import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink
            to="/login"
            activeClassName="active"
            onClick={this.myFunction}
          >
            LOGIN
          </NavLink>
          <NavLink
            to="/user"
            activeClassName="active"
            onClick={this.myFunction}
          >
            USER
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="active"
            onClick={this.myFunction}
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/connect"
            activeClassName="active"
            onClick={this.myFunction}
          >
            CONNECT
          </NavLink>
          <NavLink
            to="/search"
            activeClassName="active"
            onClick={this.myFunction}
          >
            SEARCH
          </NavLink>
          <NavLink
            to="/home"
            activeClassName="active"
            onClick={this.myFunction}
          >
            HOME
          </NavLink>
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
