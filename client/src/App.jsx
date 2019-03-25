import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";

import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import SearchUserDetail from "./components/SearchUserDetail";
import Users from "./components/Users";
import MyProfile from "./components/MyProfile";

import "./assets/css/Body.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/:path(|index|home|start)" component={Home} />
          <Route path="/search/users/:userId" component={SearchUserDetail} />
          <Route path="/:path(|search|find)" component={Search} />
          <Route path="/:path(|users)" component={Users} />
          <Route path="/:path(|myprofile)" component={MyProfile} />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
