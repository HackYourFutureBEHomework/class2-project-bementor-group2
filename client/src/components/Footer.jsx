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
                <table>
                  <td>
                    <i className="fab fa-twitter" />{" "}
                  </td>
                  <td>
                    <i className="fab fa-facebook-f" />{" "}
                  </td>
                  <td>
                    <i className="fab fa-github" />{" "}
                  </td>
                  <td>
                    <i className="copyright" />
                    {"eMighty - Powerfull Coding"}
                  </td>
                </table>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
