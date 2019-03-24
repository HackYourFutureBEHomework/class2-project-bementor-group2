import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Search from "../components/Search";
import SearchUserDetail from "../components/SearchUserDetail";
import User from "../components/User";

import "../assets/css/Body.css";

const Body = () => {
  return (
    <div className="body">
      <Switch>
        <Route path="/:path(|index|home|start)" component={Home} />
        <Route path="/search/users/:userId" component={SearchUserDetail} />
        <Route path="/:path(|search|find)" component={Search} />
        <Route path="/user" component={User} />
        <Route render={() => <p>Page not found</p>} />
      </Switch>
    </div>
  );
};

export default Body;
