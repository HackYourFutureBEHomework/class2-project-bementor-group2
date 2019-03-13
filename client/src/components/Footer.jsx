import React, { Component } from "react";
import styles from "/home/hyfbe16/class2-project-bementor-group2/client/src/assets/css/footer.css";

class Footer extends Component {
  render() {
    return (
      <div id="container">
        <div className="header">
          <div container>
            <div className="footer">
              <footer>
                <i className="fab fa-twitter" />{" "}
                <i className="fab fa-facebook-f" />{" "}
                <i className="fab fa-github" />{" "}
                <span>
                  <i className="copyright" />
                  {"eMighty - Powerfull Coding"}
                </span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
