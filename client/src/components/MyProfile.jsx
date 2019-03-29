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

  handleSubmit = e => {
    e.preventDefault();

    const newUser = { ...this.state };

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

            <label htmlFor="mentorOrMentee">I would like to be...</label>
            <label className="inline">
              <input
                type="checkbox"
                value="true"
                name="mentor"
                onChange={this.handleCheckboxChange}
                checked={this.state.mentor}
              />
              Mentor
            </label>
            <label className="inline">
              <input
                type="checkbox"
                value="true"
                name="mentee"
                onChange={this.handleCheckboxChange}
                checked={this.state.mentee}
              />
              Mentee
            </label>

            <fieldset>
              <legend>
                <span className="number">1</span>Your basic info
              </legend>
              <label htmlFor="firstName" className="required">
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
              <label htmlFor="lastName" className="required">
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
              <label htmlFor="e-mail">E-mail</label>
              <input
                className="email"
                type="text"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Your e-mail will not be visible for others and used only for notification"
              />
              <label htmlFor="password" className="required">
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
              <label htmlFor="tagline">Tagline</label>
              <input
                className="tagline"
                type="text"
                value={this.state.tagline}
                onChange={this.handleInputChange}
                name="tagline"
                placeholder="Your motto"
              />
              <label htmlFor="location">Location</label>
              <input
                className="location"
                type="text"
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Where do you live ?"
              />
              <label htmlFor="bio">Bio</label>
              <input
                className="bio"
                type="text"
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="Describe yourself in few(or more) sentences that might be interesting for others"
              />
              <label htmlFor="interests">Interests</label>
              <input
                className="interests"
                type="text"
                value={this.state.interests}
                onChange={this.handleInputChange}
                name="interests"
                placeholder="What are your interests ?"
              />
              <label htmlFor="skills">Skills</label>
              {this.renderInputs(skills)}
              <label className="languages" htmlFor="languages">
                Languages
              </label>
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
