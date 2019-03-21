import React, { Component } from "react";
import "../assets/css/SearchUser.css";
import { searchUsers } from "../api/users";

class SearchUser extends Component {
  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    const users = await searchUsers(this.state.query);
    this.props.onSearch(users);
  };

  handleInputChanged = event => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <form className="searchUser" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleInputChanged}
          placeholder="Find your Guru"
        />
        <input type="submit" value="I'm lucky!" />
      </form>
    );
  }
}

export default SearchUser;
