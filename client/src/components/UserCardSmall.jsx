import React, { Component } from "react";
import locationLogo from "../assets/images/otherlogos/location_marker.png";
import cssLogo from "../assets/images/slills_logos_svg/CSS3_logo.svg";
import HTMLLogo from "../assets/images/slills_logos_svg/HTML5_logo.svg";
import JSLogo from "../assets/images/slills_logos_svg/JavaScript_logo.svg";
import NodeLogo from "../assets/images/slills_logos_svg/Node.js_logo.svg";
import CLILogo from "../assets/images/slills_logos_svg/comand_line.png";
import DatabaseLogo from "../assets/images/slills_logos_svg/Database.svg";
import GithubLogo from "../assets/images/slills_logos_svg/Githublogo.svg";
import ReactLogo from "../assets/images/slills_logos_svg/react_logo.svg";
import ArabFlag from "../assets/images/otherlogos/arableagueflag.svg";

import Ranking from "./Ranking";

const skills = [
  { name: "html", label: "HTML", img: HTMLLogo },
  { name: "css", label: "CSS", img: cssLogo },
  { name: "js", label: "JavaScript", img: JSLogo },
  { name: "datab", label: "Database", img: DatabaseLogo },
  { name: "node", label: "Node.js", img: NodeLogo },
  { name: "react", label: "React.js", img: ReactLogo },
  { name: "cli", label: "CLI", img: CLILogo },
  { name: "git", label: "GitHub", img: GithubLogo }
];

class UserCardSmall extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  deleteUser = userToDelete => {
    fetch(`http://localhost:4000/user/${userToDelete._id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(res => {
        const users = [...this.state.users];
        const index = users.findIndex(user => {
          return users._id === userToDelete._id;
        });
        users.splice(index, 1);
        this.setState({ users });
      });
  };

  renderSkill(userSkill) {
    let skill = skills.find(e => e.name === userSkill.name);
    if (!skill) {
      return "";
    }

    return (
      <span>
        <img
          src={skill.img}
          alt={skill.label + " skill"}
          title={"Level: " + userSkill.level}
        />{" "}
        {userSkill.level}
      </span>
    );
  }

  render() {
    const { user } = this.props;

    return (
      <div className="details">
        <a href={`/user/${user._id}`}>
          <div className="details__small">
            <div className="details__logo">
              <img
                src="https://source.unsplash.com/90x90/?face"
                alt={user.firstName + " " + user.lastName}
              />
            </div>

            <div className="details__name">
              <p className="details__firstName">{user.firstName}</p>
              <p className="details__lastName">{user.lastName}</p>
              {user.mentor && <span className="details__mentor">Mentor</span>}
              {user.mentor && user.mentee && (
                <span className="details__separator"> and </span>
              )}
              {user.mentee && <span className="details__mentee">Mentee</span>}
              <Ranking id={user._id} ranking={user.ranking} />
            </div>
          </div>
          <span className="details__tagline">{user.tagline}</span>
          <div className="details__profile">
            <img src={locationLogo} alt="location marker" />
            <span className="details__locationPlace">{user.location}</span>
          </div>
          <div className="skills">
            <div className="details__icons">
              <div className="details__skills">
                {user.skills.map(this.renderSkill)}
              </div>
              <div className="details__languages">
                {user.eng && (
                  <img
                    src="https://www.countryflags.io/gb/shiny/32.png"
                    alt="english"
                  />
                )}
                {user.fr && (
                  <img
                    src="https://www.countryflags.io/fr/shiny/32.png"
                    alt="french"
                  />
                )}
                {user.du && (
                  <img
                    src="https://www.countryflags.io/nl/shiny/32.png"
                    alt="dutch"
                  />
                )}
                {user.es && (
                  <img
                    src="https://www.countryflags.io/es/shiny/32.png"
                    alt="spanish"
                  />
                )}
                {user.ar && <img src={ArabFlag} alt="spanish" />}
                {user.rus && (
                  <img
                    src="https://www.countryflags.io/ru/shiny/32.png"
                    alt="russian"
                  />
                )}
                {user.tr && (
                  <img
                    src="https://www.countryflags.io/tr/shiny/32.png"
                    alt="turkish"
                  />
                )}
              </div>
            </div>
          </div>
        </a>
        <button
          className="userCardSmall__deleteButton"
          onClick={() => this.deleteUser(user)}
        >
          Delete user
        </button>
      </div>
    );
  }
}

export default UserCardSmall;
