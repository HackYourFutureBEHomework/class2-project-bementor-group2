import React, { Fragment, Component } from "react";
import UserCardSmall from "./UserCardSmall";
import "../assets/css/Users.css";
import "../assets/css/UserCardSmall.css";
import SearchUser from "./SearchUser";
import { getUsers, searchUsers } from "../api/users";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  onSearch = async query => {
    const users = await searchUsers(query);
    this.setState({ users });
  };

  async componentDidMount() {
    const users = await getUsers();
    this.setState({
      users: users
    });

    fetch(`http://localhost:4000/user`)
      .then(res => res.json())
      .then(users => {
        this.setState({ users });
      });
  }

  render() {
    const { users } = this.state;

    const $users = users.map(user => (
      <UserCardSmall key={user._id} user={user} />
    ));

    return (
      <Fragment>
        <div className="searchField">
          <SearchUser onSearch={this.onSearch} />
        </div>

        <div className="container">{$users}</div>
      </Fragment>
    );
  }
}

export default Users;
