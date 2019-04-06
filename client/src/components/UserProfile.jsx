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
import Container from "./Container";

import Ranking from "./UserRanking";

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

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      myProfileId: "5c9cb17304131e3ebd0f80d7",
      myUpdatedProfile: []
    };
  }

  async componentDidMount() {
    const user = await userDetails(this.props.match.params._id);
    this.setState({
      user: user
    });
  }

  // handleAddMentor = async () => {
  //   console.log("Added:", this.state.user._id);
  //   const myProfileId = "5c9cb17304131e3ebd0f80d7";
  //   await userDetails(myProfileId).then(res => {
  //     this.setState({ myUpdatedProfile: res });
  //   });
  //   const myUpdatedProfile = this.state.myUpdatedProfile.connectedAsMentee.push(
  //     myProfileId
  //   );
  //   users.save(function(err) {
  //     if (err) {
  //       console.error("ERROR!");
  //     }
  //   });
  // };

  handleAddMentor = async () => {};

  // updateLevelHandler = (skillName, level) => {
  //   const { user } = this.state;
  //   const skill = user.skills.find(s => s.name == skillName);
  //   skill.level = level;
  //   this.setState({ user });
  // };

  renderSkill(userId, userSkill) {
    let skill = skills.find(e => e.name === userSkill.name);
    if (!skill) {
      return "";
    }

    return (
      <div
        key={userId + "_" + userSkill.name}
        title={"Level " + userSkill.level}
      >
        <img src={skill.img} alt={skill.label + " skill"} />
        <span className="level">{userSkill.level}</span>
        {/* <SkillLevel
          userId={userId}
          skillName={userSkill.name}
          level={userSkill.level}
          updateLevelHandler={this.updateLevelHandler}
        /> */}
      </div>
    );
  }

  render() {
    // console.log(this.state.myUpdatedProfile);
    const {
      _id,
      mentor,
      mentee,
      firstName,
      lastName,
      tagline,
      location,
      bio,
      interests,
      skills = [],
      eng,
      fr,
      du,
      es,
      ar,
      tr,
      rus,
      ranking
    } = this.state.user;

    return (
      <Container>
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
              <a className="addButton" href="#" onClick={this.handleAddMentor}>
                Add as mentor
              </a>
            </div>
            <div className="detailsFull__information">
              <div className="detailsFull__name">
                <span className="detailsFull__comment">Hi, my name is </span>
                <span className="detailsFull__firstName">{firstName}</span>

                <Ranking id={_id} ranking={ranking} />

                <div className="detailsFull__role">
                  <span className="detailsFull__comment">...I'm a </span>
                  {mentor && (
                    <span className="detailsFull__mentor">Mentor</span>
                  )}
                  {mentee && (
                    <span className="detailsFull__mentee">Mentee</span>
                  )}
                </div>

                <span className="detailsFull__lastName"> {lastName}</span>
              </div>

              <div className="detailsFull__role">
                <span className="detailsFull__comment">...I'm a </span>
                {mentor && <span className="detailsFull__mentor">Mentor</span>}
                {mentor && mentee && (
                  <span className="detailsFull__comment"> and </span>
                )}
                {mentee && <span className="detailsFull__mentee">Mentee</span>}
              </div>

              <div className="detailsFull__location">
                <span className="detailsFull__comment"> from </span>
                <span className="detailsFull__locationPlace">{location}</span>
              </div>
              <div className="detailsFull__bio">
                <span className="detailsFull__comment">Few words about me</span>
                <span className="detailsFull__bioText">{bio}</span>
              </div>
              <div className="detailsFull__interests">
                <span className="detailsFull__comment">...also, I like</span>
                <span className="detailsFull__interestsText">{interests}</span>
              </div>
              <div className="skillsFull">
                <div className="detailsFull__skills">
                  <span className="detailsFull__comment">My core skills</span>
                  {skills.map(skill => this.renderSkill(_id, skill))}
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
      </Container>
    );
  }
}

export default UserProfile;
