import React, { Component } from "react";
import Container from "./Container";

import { createUser } from "../api/users";

import "../assets/css/Profile.css";

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
    this.state = {};
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
  }

  componentDidUpdate() {
    this.setTitle();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = e => {
    const propName = e.target.name;

    this.setState({ [propName]: e.target.checked });
  };

  /**
   * Updates the DB properties for mentee/mentor using the property position.
   *
   * @param user
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
      default:
        // Should not happen because the field is required
        alert("Position is required, check the values.");
        return;
    }
    delete user.position;

    return user;
  }

  handleSubmit = e => {
    e.preventDefault();

    const newUser = { ...this.state };

    newUser = this.updateMenteeMentor(newUser);

    // TODO: use a nice UI to inform the user
    createUser(newUser)
      .then(user => this.setState({ ...user }))
      .then(() => alert("User was successfully created!"));
  };

  renderInputs(inputs) {
    return inputs.map(({ name, label }) => {
      return (
        <label key={name} className="inline">
          <input
            type="checkbox"
            value="true"
            onChange={this.handleCheckboxChange}
            name={name}
            checked={this.state[name]}
          />
          {label}
        </label>
      );
    });
  }

  render() {
    return (
      <Container>
        <form className="userForm" onSubmit={this.handleSubmit}>
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
            <label>I would like to be...</label>
            <label className="inline">
              <input
                type="radio"
                value="mentor"
                name="position"
                onChange={this.handleInputChange}
                defaultChecked={this.state.mentor}
                required
              />{" "}
              Mentor
            </label>{" "}
            <label className="inline">
              <input
                type="radio"
                value="mentee"
                name="position"
                onChange={this.handleInputChange}
                defaultChecked={this.state.mentee}
                required
              />{" "}
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
              <label>Skills</label>
              {this.renderInputs(skills)}
              <label className="languages">Languages</label>
              {this.renderInputs(languages)}
            </fieldset>
          </div>
          <button className="submit_button" type="submit" value="let me Be!">
            SUBMIT YOUR INFO
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
