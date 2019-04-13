import React, { Component } from "react";
import Container from "./Container";
import Cookies from "universal-cookie";

import { createUser, getLoggedUserDetails, updateUser } from "../api/users";

import "../assets/css/Profile.css";

const cookies = new Cookies();

const DEFAULT_TITLE = "My Profile";
const skills = [
  { name: "html", label: "HTML" },
  { name: "css", label: "CSS" },
  { name: "js", label: "JavaScript" },
  { name: "datab", label: "Database" },
  { name: "node", label: "Node.js" },
  { name: "react", label: "React.js" },
  { name: "cli", label: "CLI" },
  { name: "git", label: "GitHub" }
];
const languages = [
  { name: "eng", label: "English" },
  { name: "fr", label: "French" },
  { name: "du", label: "Dutch" },
  { name: "es", label: "Spanish" },
  { name: "ar", label: "Arabic" },
  { name: "tr", label: "Turkish" },
  { name: "rus", label: "Russian" },
  { name: "de", label: "German" }
];

class MyProfile extends Component {
  constructor(props) {
    super(props);

    const isAuthenticated = !!cookies.get("token");

    this.state = {
      skills: [],
      isRegistration: !isAuthenticated
    };
  }

  setTitle() {
    let newTitle = "";
    if (this.state.firstName) {
      newTitle += this.state.firstName + " ";
    }
    if (this.state.lastName) {
      newTitle += this.state.lastName;
    }
    if (newTitle) {
      newTitle += " - ";
    }
    newTitle += DEFAULT_TITLE;
    document.title = newTitle;
  }

  componentDidMount() {
    this.setTitle();

    if (!this.state.isRegistration) {
      getLoggedUserDetails().then(res => {
        if (res.status === "ERROR") {
          alert(`Error fetching user data: '${res.message}'`);
          return;
        }
        this.setState({ ...res });
      });
    }
  }

  componentDidUpdate() {
    this.setTitle();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSkillChange = e => {
    const name = e.target.name;
    const level = e.target.value;
    let skills = [...this.state.skills];
    const skill = skills.find(skill => skill.name === name);
    if (skill) {
      skill.level = level;
    } else {
      skills.push({ name, level });
    }

    this.setState({ skills });
  };

  handleCheckboxChange = e => {
    const propName = e.target.name;

    this.setState({ [propName]: e.target.checked });
  };

  /**
   * Updates the DB properties for mentee/mentor using the property position.
   *
  //  * @param user
   */
  updateMenteeMentor(user) {
    switch (user.position) {
      case "mentee":
        user["mentee"] = true;
        user["mentor"] = false;
        break;
      case "mentor":
        user["mentee"] = false;
        user["mentor"] = true;
        break;
      case "mentorAndMentee":
        user["mentee"] = true;
        user["mentor"] = true;
        break;
      default:
        // Should not happen because the field is required
        alert("Position is required, check the values.");
        return;
    }
    delete user.position;

    return user;
  }

  handleRegistration = () => {
    let newUser = { ...this.state };

    newUser = this.updateMenteeMentor(newUser);

    createUser(newUser).then(res => {
      if (res.status === "ERROR") {
        alert(`Error while creating user: '${res.message}'`);
        return;
      }
      this.setState({ ...res });

      // TODO: use a nice UI to inform the user
      alert("User was successfully created!");
    });
  };

  handleUserUpdate = () => {
    const updatedUser = { ...this.state };

    updateUser(updatedUser).then(res => {
      if (res.status === "ERROR") {
        alert(`Error while updating user: '${res.message}'`);
        return;
      }
      this.setState({ ...res });

      // TODO: use a nice UI to inform the user
      alert("User was successfully updated!");
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.isRegistration) {
      this.handleRegistration();
    } else {
      // Edit user's data
      this.handleUserUpdate();
    }
  };

  renderLanguages() {
    return languages.map(({ name, label }) => {
      return (
        <label key={name} className="inline">
          <label className="language_profile">{label}</label>
          <input
            type="checkbox"
            value="true"
            onChange={this.handleCheckboxChange}
            name={name}
            checked={this.state[name]}
          />
        </label>
      );
    });
  }

  renderSkills() {
    return skills.map(({ name, label }) => {
      return (
        <label key={name} className="label-select">
          {label}
          <select
            name={name}
            className="skill_level"
            value={this.state[name]}
            onChange={this.handleSkillChange}
          >
            <option value="">Select</option>
            <option value="1">Basic</option>
            <option value="2">Novice</option>
            <option value="3">Intermediate</option>
            <option value="4">Advanced</option>
            <option value="5">Expert</option>
          </select>
        </label>
      );
    });
  }

  render() {
    const { isRegistration } = this.state;

    return (
      <Container>
        <form
          method="post"
          action="/register"
          className="userForm"
          onSubmit={this.handleSubmit}
        >
          <div className="userForm_container">
            <h1>Welcome to BeMentor</h1>
            <div className="avatar">
              <img
                className="profileLogo"
                src="https://source.unsplash.com/80x80/?face"
                alt="name"
              />
            </div>
            {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
            {!isRegistration && <h2>Update this form with your information</h2>}
            <label>I would like to be...</label>
            <label className="inline">
              <input
                type="radio"
                value="mentor"
                name="position"
                onChange={this.handleInputChange}
                defaultChecked={this.state.mentor}
                required
              />
              Mentor
            </label>
            <label className="inline">
              <input
                type="radio"
                value="mentee"
                name="position"
                onChange={this.handleInputChange}
                defaultChecked={this.state.mentee}
                required
              />
              Mentee
            </label>
            <br />
            <br />
            <fieldset>
              <legend>
                <span className="number">1</span>Your basic info
              </legend>
              <label className="required">
                First Name
                <input
                  name="firstName"
                  className="firstName"
                  type="text"
                  placeholder="Your first name"
                  onChange={this.handleInputChange}
                  value={this.state.firstName}
                  required
                />
              </label>
              <label className="required">
                Family Name
                <input
                  name="lastName"
                  className="lastName"
                  type="text"
                  placeholder="Your last name"
                  onChange={this.handleInputChange}
                  value={this.state.lastName}
                  required
                />
              </label>
              <label className="required">
                E-mail
                <input
                  className="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Your e-mail will not be visible for others and used only for notification"
                  required
                />
              </label>
              <label className="required">
                Password
                <input
                  name="password"
                  className="password"
                  type="password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                  placeholder="password"
                  required
                />
              </label>
            </fieldset>
            <fieldset>
              <legend>
                <span className="number">2</span>Your profile
              </legend>
              <label>
                Tagline
                <input
                  className="tagline"
                  type="text"
                  value={this.state.tagline}
                  onChange={this.handleInputChange}
                  name="tagline"
                  placeholder="Your motto"
                />
              </label>
              <label>
                Location
                <input
                  className="location"
                  type="text"
                  value={this.state.location}
                  onChange={this.handleInputChange}
                  name="location"
                  placeholder="Where do you live?"
                />
              </label>
              <label>
                Bio
                <input
                  className="bio"
                  type="text"
                  value={this.state.bio}
                  onChange={this.handleInputChange}
                  name="bio"
                  placeholder="Describe yourself in few (or more) sentences that might be interesting for others"
                />
              </label>
              <label>
                Interests
                <input
                  className="interests"
                  type="text"
                  value={this.state.interests}
                  onChange={this.handleInputChange}
                  name="interests"
                  placeholder="What are your interests?"
                />
              </label>
              <div className="skills_container_profile">
                <div className="skills_profile">
                  <label>Skills</label>
                  {this.renderSkills()}
                </div>
                <div className="languages_profile">
                  <label className="languages_profile">Languages</label>
                  {this.renderLanguages()}
                </div>
              </div>
            </fieldset>
          </div>
          <button className="submit_button" type="submit" value="let me Be!">
            {isRegistration && "REGISTER YOUR INFO"}
            {!isRegistration && "UPDATE YOUR INFO"}
          </button>
        </form>
        <button className="deleteUser_button" type="submit" value="delete_user">
          Delete user
        </button>
        <button className="updateUser_button" type="submit" value="update_user">
          Update user
        </button>
      </Container>
    );
  }
}

export default MyProfile;
