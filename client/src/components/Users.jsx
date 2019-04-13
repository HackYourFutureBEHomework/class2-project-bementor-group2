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

    let queryParams = this.getQueryParams(this.props.location);
    this.state = {
      loading: false,
      users: [],
      queryParams
    };

    // Listen for changes in the URL (when the Header search component triggers a search)
    this.props.history.listen((browserLocation, action) => {
      // browserLocation is an object like window.location
      let queryParams = this.getQueryParams(browserLocation);
      this.onSearch(queryParams);
    });
  }

  getQueryParams(browserLocation) {
    let queryParams = {};

    if (browserLocation && browserLocation.search) {
      queryParams = queryString.parse(browserLocation.search);
    }

    return queryParams;
  }

  onSearch = async queryParams => {
    this.setState({ loading: true });
    const users = await searchUsers(queryParams);
    this.setState({ users, loading: false });
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const users = this.state.queryParams
      ? await searchUsers(this.state.queryParams)
      : await getUsers();
    this.setState({ users, loading: false });

    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { users, queryParams } = this.state;

    let $users = users.map(user => (
      <UserCardSmall key={user._id} user={user} />
    ));

    if ($users.length < 1) {
      $users = <p>No users were found.</p>;
    }

    return (
      <Container>
        <div className="searchField">
          <SearchUser
            q={queryParams.q}
            location={queryParams.location}
            onSearch={this.onSearch}
          />
        </div>

        {this.state.loading && (
          <div className="users-loader">
            Loading users...
            <br />
            <i className="fa fa-spinner fa-spin" aria-hidden="true" />{" "}
          </div>
        )}
        {!this.state.loading && <div className="container">{$users}</div>}
      </Container>
    );
  }
}

export default Users;
