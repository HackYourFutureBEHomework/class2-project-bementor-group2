import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  // componentDidMount() {
  //   getUsers().then(modules => {
  //     console.log(modules);
  //   });
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <main>
            <Header />
            <Body />
            <Footer />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
