import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

class Header extends Component {
  myFunction() {
    var x = document.getElementById("myTopnav");
    x.className = x.className === "topnav" ? "topnav responsive" : "topnav";
  }

  handleHeaderSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // this.state.query && (
    //   <Redirect
    //     to={{
    //       pathname: "/users",
    //       state: { query: this.state.query }
    //     }}
    //   />
    // );
  };
  // this.props.onSearch(this.state.query);

  handleHeaderInputChanged = event => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <header>
        <div className="header_image">
          <div className="header_title">BeMentor.</div>
        </div>
        <div className="topnav" id="myTopnav">
          <form
            className="search__form"
            action=""
            autoComplete="on"
            onSubmit={this.handleHeaderSubmit}
          >
            <input
              id="search_input"
              name="search"
              type="text"
              placeholder="Find your Mentor"
              onChange={this.handleHeaderInputChanged}
            />
            <input id="search_submit" value="Search" type="submit" />
          </form>
          <Link to="/myprofile">MY PROFILE</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/users">SEARCH USERS</Link>
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
