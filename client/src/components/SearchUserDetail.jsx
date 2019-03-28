import React, { Component } from "react";

import API_PREFIX_URL from "../config";

class SearchUserDetail extends Component {
  customDateFormat = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });

  constructor(props) {
    super(props);

    this.state = {
      user: {
        skills: [],
        interests: [],
        spokenLanguage: [],
        membershipDate: ""
      }
    };
  }

  searchUser(userId) {
    fetch(`${API_PREFIX_URL}/user/${userId}`)
      .then(response => response.json())
      .then(user => {
        console.log("search: user: ", user);
        this.setState({
          user
        });
      })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.searchUser(userId);
  }

  formatDate(dateValue) {
    if (!dateValue) {
      return "No data";
    }

    return this.customDateFormat.format(new Date(dateValue));
  }

  render() {
    let {
      firstName,
      secondName,
      tagline,
      bio,
      skills,
      interests,
      spokenLanguage,
      location,
      membershipDate
    } = this.state.user;
    let email = this.state.user["e-mail"];
    membershipDate = this.formatDate(membershipDate);

    return (
      <div className="searchUserDetail">
        <label>First Name:</label>
        <span className="firstName">{firstName}</span>
        <br />
        <label>Last Name:</label>
        <span className="secondName">{secondName}</span>
        <br />
        <label>E-mail:</label>
        <a className="email" href={"mailto:" + email}>
          {email}
        </a>
        <br />
        <label>Location:</label> <span className="location">{location}</span>
        <br />
        <br />
        <label>Skills:</label>
        <ul className="skills">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <label>Interests:</label>
        <ul className="interests">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <label>Spoken Languages:</label>
        <ul className="spokenLanguage">
          {spokenLanguage.map((spokenLang, index) => (
            <li key={index}>{spokenLang}</li>
          ))}
        </ul>
        <label>Motto:</label> <span className="tagline">{tagline}</span>
        <br />
        <label>Bio:</label> <div className="bio">{bio}</div>
        <br />
        <label>Member since:</label>
        <span className="membershipDate">{membershipDate}</span>
      </div>
    );
  }
}

export default SearchUserDetail;
