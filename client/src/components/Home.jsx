import React, { Component } from "react";
import Container from "./Container";
import Foto from "../assets/images/ticket.jpg";
import HYFLogo from "../assets/images/hyf.svg";
import "../assets/css/Body.css";
import "../assets/css/Home.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <div className="container_mainPage">
          <div className="main_about">
            <h1>About BeMentor</h1>
            <p>
              Be Mentor is an organistion that Lorem ipsum dolor sit amet, ante
              aenean pellentesque at aliquet. Maecenas accumsan, dui purus,
              morbi aenean sed risus dictum amet est, quis tincidunt, natoque
              gravida venenatis dis. Aenean ac nunc, morbi neque. Est aliquet in
              erat interdum euismod hac, fringilla pellentesque erat eleifend
              integer magna condimentum, placerat quam quod. Et risus placerat
              proin eros, nunc sed quisque ac donec, pellentesque enim lectus
              quam quis morbi et <br />
              <img
                className="imgResponsive content"
                src={Foto}
                alt="BeCentral"
              />
              <br />
            </p>
          </div>
          <div className="main_forWhom">
            <h1>Mission</h1>
            <p>
              Be Mentor is an organistion that Lorem ipsum dolor sit amet, ante
              aenean pellentesque at aliquet. Maecenas accumsan, dui purus,
              morbi aenean sed risus dictum amet est, quis tincidunt, natoque
              gravida venenatis dis. Aenean ac nunc, morbi neque. Est aliquet in
              erat interdum euismod hac, fringilla pellentesque erat eleifend
              integer magna condimentum, placerat quam quod. Et risus placerat
              proin eros, nunc sed quisque ac donec, pellentesque enim lectus
              quam quis morbi et <br />
              <img
                className="imgResponsive content"
                src={Foto}
                alt="BeCentral"
              />
              <br />
            </p>
          </div>
          <div className="main_benefits">
            <h1>Benefits</h1>
            <p>
              Be Mentor is an organistion that Lorem ipsum dolor sit amet, ante
              aenean pellentesque at aliquet. Maecenas accumsan, dui purus,
              morbi aenean sed risus dictum amet est, quis tincidunt, natoque
              gravida venenatis dis. Aenean ac nunc, morbi neque. Est aliquet in
              erat interdum euismod hac, fringilla pellentesque erat eleifend
              integer magna condimentum, placerat quam quod. Et risus placerat
              proin eros, nunc sed quisque ac donec, pellentesque enim lectus
              quam quis morbi et <br />
              <img
                className="imgResponsive content"
                src={Foto}
                alt="BeCentral"
              />
              <br />
            </p>
          </div>
          <div className="main_createdBy">
            <h1>About us</h1>
            <p>
              Be Mentor is an organistion that Lorem ipsum dolor sit amet, ante
              aenean pellentesque at aliquet. Maecenas accumsan, dui purus,
              morbi aenean sed risus dictum amet est, quis tincidunt, natoque
              gravida venenatis dis. Aenean ac nunc, morbi neque. Est aliquet in
              erat interdum euismod hac, fringilla pellentesque erat eleifend
              integer magna condimentum, placerat quam quod. Et risus placerat
              proin eros, nunc sed quisque ac donec, pellentesque enim lectus
              quam quis morbi et <br />
              <img
                className="imgResponsive content"
                src={HYFLogo}
                alt="HYFLogo"
              />
              <br />
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
