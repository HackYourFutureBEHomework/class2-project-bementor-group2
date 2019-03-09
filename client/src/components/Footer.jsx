import React from "react";
import "../assets/css/Footer.css";
import OKB from "../assets/images/OKB.svg";
import BeCentral from "../assets/images/BeCentral.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_icons">
        <a
          href="https://www.linkedin.com/company/be-central-brussels/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FontAwesomeIcon icon={faLinkedin} />
          </i>
        </a>
        <a
          href="https://www.facebook.com/becentral/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FontAwesomeIcon
              icon={faFacebook}
              href="https://www.facebook.com/becentral/"
            />
          </i>
        </a>
        <a
          href="https://twitter.com/becentralbxl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FontAwesomeIcon icon={faTwitter} />
          </i>
        </a>
        <a
          href="https://www.instagram.com/becentral/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <FontAwesomeIcon icon={faInstagram} />
          </i>
        </a>
      </div>
      <div className="footer_logo">
        <a
          href="https://be.okfn.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={OKB} alt="OKB logo" />
        </a>
        <a
          href="https://becentral.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={BeCentral} alt="BeCentral logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
