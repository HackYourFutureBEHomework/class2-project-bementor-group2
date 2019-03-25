import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      searchText: ""
    };
  }

  setSearchText(event) {
    event.preventDefault();
    let searchText = event.target.value ? event.target.value : "";
    this.setState({
      searchText: searchText
    });
    this.search(searchText);
  }

  // search(searchText) {
  //   const queryString = "firstName=" + searchText.toLowerCase().trim();

  //   fetch(`${API_PREFIX_URL}/users?${queryString}`)
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log("search: result: ", result);
  //       this.setState({
  //         users: result
  //       });
  //     })
  //     .catch(error => console.error(error));
  // }

  generateItems() {
    return this.state.users.map(
      ({ _id, firstName, secondName, location, skills, email }) => {
        return (
          <div key={_id} className="">
            <div className="clist__name">
              <Link to={"/search/users/" + _id}>
                <span className="clist__firstName">{firstName}</span>
                <span className="clist__secondName">{secondName}</span>
              </Link>
              <div className="clist__skills">{skills.join(", ")}</div>
              <div className="clist__email">{email}</div>
              <div className="clist__location">{location}</div>
            </div>
            <br />
          </div>
        );
      }
    );
  }

  render() {
    return (
      <div className="search">
        <div className="clist__search">
          <span className="clist__searchIcon">
            <i className="fa fa-search" />
          </span>
          <input
            className="clist__searchInput"
            type="search"
            placeholder="Search"
            onChange={event => this.setSearchText(event)}
            value={this.state.searchText}
          />
        </div>
        <div className="clist__contacts">
          {/* Search results */}
          {this.generateItems()}
        </div>
      </div>
    );
  }
}

export default Search;
