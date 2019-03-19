import React, { Component } from "react";

import "../assets/css/user.css";

class User extends Component {
  render() {
    return (
      <div container1>
        <div className="user">
          <div container1 />
          <table>
            <tr />
            <td />
            <td />
            <tr />
            <tr className="pictureFrame" />
            <td />
            <td>
              <h1 className="myName">Madeleine Tubala</h1>
            </td>
            <td>
              <br />
              <br />
              <h2 className="mySummary">
                It always seems impossible untill it is done
              </h2>
            </td>
          </table>
        </div>
        <td>
          <div container2 />
          <h3 className="myCampus">Campus</h3>
          {""}

          {""}
        </td>
        <td>
          <div container3 />
          <h3 className="mySchool">BeCentrale</h3>

          {""}
          {""}
        </td>
        <div container4 />
        <h3 className="myBioTitle">Bio</h3>
        <div>
          <p className="myBio">
            <hr />
            As a mentor, I can provide guidance, reflection, and insight to{" "}
            <br />
            guide you toward your next step. My approach is casual and <br />
            personalised, and I enjoy getting to know each individual <br />
            supporting them in the way they need. I have experience in <br />
            public sector software implementation projects, hospital <br />
            planning, business analysis, event management, music teaching,
            <br />
            singing, charity work, non profit organisations, volunteering,
            <br />
            running, cycling, balancing extra-curricular with work, and
            <br />
            relocating (lived in 10 countries).
            <br />
          </p>{" "}
        </div>
        <div className="col-md-20">
          <div className="myInterest">Interest</div>
          <div className="profile-block">
            <a className="list-group">
              <button className="list-group-item" classtype="button">
                First interest
              </button>
              <button className="list-group-item" classtype="button">
                Second interest <span class="badge" />
              </button>
              <br />
              <br />
              <button className="list-group-item" classtype="button">
                Third interest <span class="badge" />
              </button>
              <button className="list-group-item" classtype="button">
                Fourth interest <span class="badge" />
              </button>
              <br />
              <button className="list-group-item" classtype="button">
                <span class="badge">{""}</span>
              </button>
              <button className="list-group-item" classtype="button" />
              <button className="list-group-item" classtype="button">
                <span class="badge">{""}</span>
              </button>
            </a>
          </div>
        </div>

        <table className="mySkills">
          <tr>Skills</tr>
          <tr>
            <td>First skill {""}</td>
            <i className="greenDot" />
            {""}
            <i className="greenDot" />
            {""}

            <i className="greenDot" />
            {""}

            <i className="greyDot" />
            {""}

            <i className="greyDot" />
            {""}
          </tr>

          <tr>
            <td>Second skill {""}</td>

            <i className="greenDot" />
            {""}

            <i className="greenDot" />
            {""}

            <i className="greenDot" />
            {""}

            <i className="greenDot" />
            {""}

            <i className="greyDot" />
            {""}
          </tr>
          <tr>
            <td>Third skill {""}</td>

            <i className="greenDot" />
            {""}

            <i className="greenDot" />
            {""}

            <i className="greyDot" />
            {""}

            <i className="greyDot" />
            {""}

            <i className="greyDot" />
            {""}
          </tr>
          <tr>
            <td>Fourth skill {""}</td>
            <i className="greenDot" />
            {""}
            <i className="greenDot" />
            {""}
            <i className="greenDot" />
            {""}
            <i className="greenDot" />
            {""}
            <i className="greenDot" />
            {""}
          </tr>
        </table>
      </div>
    );
  }
}

export default User;
