import React, { Component } from "react";
import "../assets/css/SearchUser.css";

class SearchUser extends Component {
  constructor(props) {
    super(props);
    const q = props.q !== undefined ? props.q : "";
    const location = props.location !== undefined ? props.location : "";

    this.state = { q, location };
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.props.onSearch({ ...this.state });
  };

  handleInputChanged = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { q, location } = this.state;

    return (
      <form className="searchUser" onSubmit={this.handleSubmit}>
        <input
          type="search"
          name="q"
          value={q}
          onChange={this.handleInputChanged}
          placeholder="Find your Mentor or Mentee"
        />{" "}
        <input
          type="text"
          name="location"
          value={location}
          onChange={this.handleInputChanged}
          placeholder="Location"
        />
        <input type="submit" value="Enter" />
      </form>
    );
  }
}

export default SearchUser;
