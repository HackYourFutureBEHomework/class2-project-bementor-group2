import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import SearchUserDetail from "./components/SearchUserDetail";
import Users from "./components/Users";
import MyProfile from "./components/MyProfile";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/:path(|index|home|start)" component={Home} />
        <Route path="/search/users/:id" component={SearchUserDetail} />
        <Route path="/:path(search|find)" component={Search} />
        <Route path="/users" component={Users} />
        <Route path="/myprofile" component={MyProfile} />
        <Route render={() => <p>Page not found</p>} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
