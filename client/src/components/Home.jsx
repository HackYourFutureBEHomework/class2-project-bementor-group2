import React, { Component } from "react";
import Container from "./Container";
import Foto from "../assets/images/ticket.jpg";
import HYFClass from "../assets/images/hyf-group-picture.jpg";
import SecondClass from "../assets/images/secondclass.jpg";

import "../assets/css/Body.css";
import "../assets/css/Home.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <div className="container_mainPage">
          <div className="main_about">
            <h1>BeMentor.</h1>
            <img className="imgResponsive content" src={Foto} alt="BeCentral" />
            <p>
              BeMentor is an Open Knowledge Belgium initiative aimed to develop
              software development industry in Belgium. From one side this is a
              platform for software developers and industry professionals who
              are voluntarily willing to share their knowledge, know-hows and
              experience, with others improving their skills as a mentor. <br />{" "}
              From another side this is an opportunity for everyone to get
              support, guidance, advice and improve technical expertise. <br />
              <br />
            </p>
          </div>
          <div className="main_forWhom">
            <h1>Mission</h1>
            <img
              className="imgResponsive content"
              src={SecondClass}
              alt="SecondClass"
            />
            <p>
              We aim to improve overall software development acknowledgement in
              Belgium. Increase number of highly-skilled professionals on job
              market. Let people share their experience. To fulfill the rapidly
              growing demand for talented software developers. <br />
              <br />
            </p>
          </div>

          <div className="main_createdBy">
            <h1>About us</h1>
            <img
              className="imgResponsive content"
              src={HYFClass}
              alt="HYFClass"
            />
            <p>
              BeMentor was created in cooperation with &nbsp;
              <a
                href="http://hackyourfuture.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                HackYourFuture Belgium
              </a>
              , the coding school for refugees. The application was realized
              during 4 weeks by the second generation of students of the school
              as a Project work after passing a 6-month full-stack web
              development program. The target of the project besides working web
              application and usage of technologies that were learned during the
              course, was to learn problem solving and team collaboration.
              <br />
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
