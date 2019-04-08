import React, { Component } from "react";
import queryString from "query-string";

import Container from "./Container";
import UserCardSmall from "./UserCardSmall";
import "../assets/css/Users.css";
import "../assets/css/UserCardSmall.css";
import SearchUser from "./SearchUser";
import { getUsers, searchUsers } from "../api/users";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      initialQuery: this.getInitialQuery()
    };
  }

  getInitialQuery() {
    let initialQuery = "";
    if (this.props.location && this.props.location.search) {
      const parsedSearch = queryString.parse(this.props.location.search);
      if (parsedSearch.search) {
        initialQuery = parsedSearch.search;
      }
    }

    return initialQuery;
  }

  onSearch = async query => {
    const users = await searchUsers(query);
    this.setState({ users });
  };

  async componentDidMount() {
    const users = this.state.initialQuery
      ? await searchUsers(this.state.initialQuery)
      : await getUsers();
    this.setState({ users });

    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { users, initialQuery } = this.state;

    const $users = users.map(user => (
      <UserCardSmall key={user._id} user={user} />
    ));

    return (
      <Container>
        <div className="searchField">
          <SearchUser initialQuery={initialQuery} onSearch={this.onSearch} />
        </div>

        <div className="container">{$users}</div>
      </Container>
    );
  }
}

export default Users;
