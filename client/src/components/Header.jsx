import React, { Component } from "react";
import "./index.css";
import bg from "./pattern.gif";

class Header extends Component {
  render() {
    return (
      <article>
        <div class="container">
          {/*<img src={bg} />*/}
          <div className="centered">BeMentor</div>
        </div>
        <header>
          <nav>
            <ul>
              <ul>
                <li>
                  <a href="#login">LOGIN</a>
                </li>
                <li>
                  <a href="#connect">CONNECT</a>
                </li>
                <li>
                  <a href="#contact">CONTACT</a>
                </li>
              </ul>
            </ul>
          </nav>
        </header>
      </article>
    );
  }
}

export default Header;
