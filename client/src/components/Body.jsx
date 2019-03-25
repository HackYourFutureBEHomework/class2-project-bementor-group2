import React from "react";

import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

// import { Route, Switch } from "react-router-dom";
// import Home from "../components/Home";
// import Search from "../components/Search";
// import SearchUserDetail from "../components/SearchUserDetail";
// import Users from "../components/Users";
// import MyProfile from "../components/MyProfile";

// import "../assets/css/Body.css";

const Body = () => {
  return (
    <BrowserRouter>
      <div className="Body">
        <main>
          <Header />
          <Body />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Body;
