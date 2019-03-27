import React, { Component } from "react";
import "../assets/css/UserProfile.css";
import cssLogo from "../assets/images/slills_logos_svg/CSS3_logo.svg";
import HTMLLogo from "../assets/images/slills_logos_svg/HTML5_logo.svg";
import JSLogo from "../assets/images/slills_logos_svg/JavaScript_logo.svg";
import NodeLogo from "../assets/images/slills_logos_svg/Node.js_logo.svg";
import CLILogo from "../assets/images/slills_logos_svg/comand_line.png";
import DatabaseLogo from "../assets/images/slills_logos_svg/Database.svg";
import GithubLogo from "../assets/images/slills_logos_svg/Githublogo.svg";
import ReactLogo from "../assets/images/slills_logos_svg/react_logo.svg";
import ArabFlag from "../assets/images/otherlogos/arableagueflag.svg";
import { Link } from "react-router-dom";

import { userDetails } from "../api/users";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  async componentDidMount() {
    const user = await userDetails(this.props.match.params._id);
    this.setState({
      user: user
    });
  }

  render() {
    console.log(this.state);
    const {
      mentor,
      mentee,
      firstName,
      lastName,

      tagline,
      location,
      bio,
      interests,
      html,
      css,
      js,
      datab,
      node,
      react,
      cli,
      git,
      eng,
      fr,
      du,
      es,
      ar,
      tr,
      rus
    } = this.state.user;
    return (
      <div className="userFormFull">
        <Link className="backButton" to="/users" />
        <div className="userFormFull_container">
          <div className="detailsFull__avatar">
            <img
              className="profileLogoFull"
              src="https://source.unsplash.com/80x80/?face"
              alt="name"
            />
            <div className="detailsFull__tag">
              <span className="detailsFull__tagline">{tagline}</span>
            </div>
          </div>
          <div className="detailsFull__information">
            <div className="detailsFull__name">
              <span className="detailsFull__comment">Hi, my name is </span>
              <span className="detailsFull__firstName">{firstName}</span>

              <span className="detailsFull__lastName"> {lastName}</span>
            </div>

            <div className="detailsFull__role">
              <span className="detailsFull__comment">...I'm a </span>
              {mentor && <span className="detailsFull__mentor">Mentor</span>}
              {mentee && <span className="detailsFull__mentee">Mentee</span>}
            </div>

            <div className="detailsFull__location">
              <span className="detailsFull__comment"> from </span>
              <span className="detailsFull__locationPlace">{location}</span>
            </div>
            <div className="detailsFull__bio">
              <span className="detailsFull__comment">Few words about me </span>
              <span className="detailsFull__bioText">{bio}</span>
            </div>
            <div className="detailsFull__interests">
              <span className="detailsFull__comment">...also, I like</span>
              <span className="detailsFull__bioText">{interests}</span>
            </div>
            <div className="skillsFull">
              <div className="detailsFull__skills">
                <span className="detailsFull__comment">My core skills</span>
                {css && <img src={cssLogo} alt="CSS skill" />}
                {html && <img src={HTMLLogo} alt="HTML skill" />}
                {js && <img src={JSLogo} alt="JS skill" />}
                {node && <img src={NodeLogo} alt="NODE skill" />}
                {react && <img src={ReactLogo} alt="ReactJS skill" />}
                {datab && <img src={DatabaseLogo} alt="Database skill" />}
                {git && <img src={GithubLogo} alt="GitHub skill" />}
                {cli && <img src={CLILogo} alt="Command line skill" />}
              </div>
              <div className="detailsFull__languages">
                <span className="detailsFull__comment">I speak</span>

                {eng && (
                  <img
                    src="https://www.countryflags.io/gb/shiny/32.png"
                    alt="english"
                  />
                )}
                {fr && (
                  <img
                    src="https://www.countryflags.io/fr/shiny/32.png"
                    alt="french"
                  />
                )}
                {du && (
                  <img
                    src="https://www.countryflags.io/nl/shiny/32.png"
                    alt="dutch"
                  />
                )}
                {es && (
                  <img
                    src="https://www.countryflags.io/es/shiny/32.png"
                    alt="spanish"
                  />
                )}
                {ar && <img src={ArabFlag} alt="spanish" />}
                {rus && (
                  <img
                    src="https://www.countryflags.io/ru/shiny/32.png"
                    alt="russian"
                  />
                )}
                {tr && (
                  <img
                    src="https://www.countryflags.io/tr/shiny/32.png"
                    alt="turkish"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
