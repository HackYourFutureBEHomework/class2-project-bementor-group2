import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Users from "./components/Users";
import MyProfile from "./components/MyProfile";
import UserProfile from "./components/UserProfile";
import Login from "./components/LogIn/LogIn.jsx";
import RestorePassword from "./components/RestorePassword";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/:path(|index|home|start)" component={Home} />
        <Route path="/user/:_id" component={UserProfile} />
        <Route path="/search" component={Search} />
        <Route path="/users" component={Users} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/login" component={Login} />
        <Route path="/restore" component={RestorePassword} />

        <Route render={() => <p>Page not found</p>} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
