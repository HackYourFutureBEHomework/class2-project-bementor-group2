import React, { Fragment, Component } from "react";
import UserCardSmall from "./UserCardSmall";
import "../assets/css/Users.css";
import "../assets/css/UserCardSmall.css";
import SearchUser from "./SearchUser";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch(`http://localhost:4000/user`)
      .then(res => res.json())
      .then(users => {
        this.setState({ users });
        console.log(this.state);
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
          <SearchUser />
        </div>

        <div className="container">{$users}</div>
      </Fragment>
    );
  }
}

export default Users;
