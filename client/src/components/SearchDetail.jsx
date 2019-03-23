import React, { Component } from "react";

import API_PREFIX_URL from "../config";

class SearchDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { skills: [] }
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

  render() {
    let { firstName, secondName, location, skills, email } = this.state.user;
    return (
      <div className="searchDetail">
        <div>
          <span className="clist__firstName">{firstName}</span>{" "}
          <span className="clist__secondName">{secondName}</span>
        </div>
        <div className="clist__skills">{skills.join(", ")}</div>
        <div className="clist__email">{email}</div>
        <div className="clist__location">{location}</div>
      </div>
    );
  }
}

export default SearchDetail;
