import React, { Component } from "react";
import Route from "react-router-dom";
import locationLogo from "../assets/images/otherlogos/location_marker.png";
import cssLogo from "../assets/images/slills_logos_svg/CSS3_logo.svg";
import HTMLLogo from "../assets/images/slills_logos_svg/HTML5_logo.svg";
import JSLogo from "../assets/images/slills_logos_svg/JavaScript_logo.svg";
import NodeLogo from "../assets/images/slills_logos_svg/Node.js_logo.svg";

class UserCardSmall extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ users: newProps.users });
  }

  deleteUser = userToDelete => {
    console.log(this.state);
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
        console.log(this.state);
      });
  };
  render() {
    const { user } = this.props;

    return (
      <div className="details">
        <a href={`/search/users/${user._id}`}>
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
              <span className="details__mentorOrMentee">
                {user.mentorOrMentee}
              </span>
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
                <img src={cssLogo} alt="CSS slill" />
                <img src={HTMLLogo} alt="HTML slill" />
                <img src={JSLogo} alt="JS slill" />
                <img src={NodeLogo} alt="NODE slill" />
              </div>
              <div className="details__languages">
                <img
                  src="https://www.countryflags.io/gb/shiny/32.png"
                  alt="english"
                />
                <img
                  src="https://www.countryflags.io/fr/shiny/32.png"
                  alt="french"
                />
                <img
                  src="https://www.countryflags.io/nl/shiny/32.png"
                  alt="dutch"
                />
                <img
                  src="https://www.countryflags.io/es/shiny/32.png"
                  alt="spanish"
                />
                <img
                  src="https://www.countryflags.io/ru/shiny/32.png"
                  alt="russian"
                />
              </div>
            </div>
          </div>
        </a>
        <button onClick={() => this.deleteUser(user)}>Delete user</button>
      </div>
    );
  }
}

export default UserCardSmall;
