import React, { Component } from "react";

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

  search(searchText) {
    const queryString = "firstName=" + searchText.toLowerCase().trim();
    fetch("http://localhost:4000/users?" + queryString)
      .then(response => response.json())
      .then(result => {
        console.log("componentDidMount: result: ", result);
        this.setState({
          users: result
        });
      })
      .catch(error => console.error(error));
  }

  generateItems() {
    return this.state.users.map(
      ({ _id, firstName, secondName, location, skills, email }) => {
        return (
          <div key={_id} className="">
            <div className="clist__name">
              <div>
                <span className="clist__firstName">{firstName}</span>{" "}
                <span className="clist__secondName">{secondName}</span>
              </div>
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
