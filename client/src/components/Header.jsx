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
          <form className="search__form" action="" autoComplete="on">
            <input
              id="search_input"
              name="search"
              type="text"
              placeholder="Find your Mentor"
            />
            <input id="search_submit" value="Search" type="submit" />
          </form>

          <Link to="/myprofile">My BeMentor</Link>

          <Link to="/login">LOGIN</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/users">CONNECT</Link>
          <Link to="/home">HOME</Link>

          <a href="#" className="icon" onClick={this.myFunction}>
            <i className="fa fa-bars" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
