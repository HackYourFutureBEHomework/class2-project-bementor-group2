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
      loading: false,
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
    this.setState({ loading: true });
    const users = await searchUsers(query);
    this.setState({ users, loading: false });
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const users = this.state.initialQuery
      ? await searchUsers(this.state.initialQuery)
      : await getUsers();
    this.setState({ users, loading: false });

    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { users, initialQuery } = this.state;

    let $users = users.map(user => (
      <UserCardSmall key={user._id} user={user} />
    ));

    if ($users.length < 1) {
      $users = <p>No users were found.</p>;
    }

    return (
      <Container>
        <div className="searchField">
          <SearchUser initialQuery={initialQuery} onSearch={this.onSearch} />
        </div>

        {this.state.loading && (
          <div className="users-loader">
            Loading users...
            <br />
            <i class="fa fa-spinner fa-spin" aria-hidden="true" />{" "}
          </div>
        )}
        {!this.state.loading && <div className="container">{$users}</div>}
      </Container>
    );
  }
}

export default Users;
