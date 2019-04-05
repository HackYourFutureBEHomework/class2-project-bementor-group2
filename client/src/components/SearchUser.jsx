import React, { Component } from "react";
import "../assets/css/SearchUser.css";

class SearchUser extends Component {
  constructor(props) {
    super(props);

    this.state = { query: props.initialQuery };
  }

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
    const { initialQuery } = this.props;
    const { query } = this.state;
    const currentQuery = query !== undefined ? query : initialQuery;

    return (
      <form className="searchUser" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={currentQuery}
          onChange={this.handleInputChanged}
          placeholder="Find your Mentor or Mentee"
        />
        <input type="submit" value="Enter" />
      </form>
    );
  }
}

export default SearchUser;
