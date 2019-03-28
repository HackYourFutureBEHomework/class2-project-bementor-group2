import React, { Component } from "react";
import "../assets/css/SearchUser.css";

class SearchUser extends Component {
  handleSubmit = async event => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
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
          placeholder="Find your Mentor or Mentee"
        />
        <input type="submit" value="Enter" />
      </form>
    );
  }
}

export default SearchUser;
