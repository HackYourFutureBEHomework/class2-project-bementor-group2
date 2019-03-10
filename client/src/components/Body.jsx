import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";

import "../assets/css/Body.css";

const Body = () => {
  return (
    <div className="body">
      <Switch>
        <Route path="/:path(|index|home|start)" component={Home} />
        <Route render={() => <p>Page not found</p>} />
      </Switch>
    </div>
  );
};

export default Body;
