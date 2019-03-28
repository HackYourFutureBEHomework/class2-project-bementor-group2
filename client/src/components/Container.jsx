import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/css/Body.css";

const Container = props => {
  return (
    <div className="body">
      <div className="App">
        <main>
          <Header />
          <div className="container">{props.children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Container;
