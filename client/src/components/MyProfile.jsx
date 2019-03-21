import React, { Fragment, Component } from "react";
import "../assets/css/Profile.css";
import Users from "./Users";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // deleteUser = userToDelete => {
  //   console.log(this.state);
  // };

  handleInputChange(e) {
    this.setState({
      user: e.target
    });
    console.log(this.state);
  }

  handleSubmit = event => {
    console.log(event.target);
    event.preventDefault();
    console.log(event.target);
    const user = new Users(event.target);
    console.log(user);
    fetch(`http://localhost:4000/user`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ user });
        console.log(this.state.user);
      });
  };
  render() {
    const { user } = this.state;
    return (
      <Fragment>
        <form className="userForm" onSubmit={this.handleSubmit}>
          <div className="userForm_container">
            <h1>Welcome to BeMentor</h1>
            <div className="avatar">
              <img
                className="profileLogo"
                src="https://source.unsplash.com/80x80/?face"
                alt="name"
              />
            </div>
            <label htmlFor="mentorOrMentee">Define yourself</label>
            <input className="mentor" type="checkbox" name="mentor" />
            Mentor
            <input className="mentee" type="checkbox" name="mentee" />
            Mentee
            <fieldset>
              <legend>
                <span className="number">1</span>Your basic info
              </legend>
              <label htmlFor="firstName">
                First Name
                <input
                  name="firstName"
                  className="firstName"
                  type="text"
                  placeholder="Your first name"
                  required
                />
              </label>
              <label htmlFor="lastName">
                Family Name
                <input
                  name="lastName"
                  className="lastName"
                  type="text"
                  placeholder="Your last name"
                  required
                />
              </label>
            </fieldset>
          </div>
          <button type="submit" value="let me Be!">
            let me Be!
          </button>
        </form>
        <button className="deleteUser_button" type="submit" value="delete_user">
          Delete user
        </button>
        <button className="updateUser_button" type="submit" value="update_user">
          Update user
        </button>
      </Fragment>
    );
  }
}

export default MyProfile;

// <label htmlFor="password">
//               Password
//               <input
//                 className="password"
//                 type="password"
//                 placeholder="password"
//                 required
//               />
//             </label>
//             <label htmlFor="e-mail">e-mail</label>
//             <input
//               className="email"
//               type="text"
//               placeholder="Your e-mail will not be visible for others and used only for notification"
//             />
//           </fieldset>
//           <fieldset>
//             <legend>
//               <span className="number">2</span>Your profile
//             </legend>
//             <label htmlFor="tagline">Tagline</label>
//             <input className="tagline" type="text" placeholder="Your motto" />
//             <label htmlFor="location">Location</label>
//             <input
//               className="location"
//               type="text"
//               placeholder="Where you are"
//             />
//             <label htmlFor="bio">BIO</label>
//             <input
//               className="bio"
//               type="text"
//               placeholder="Describe yourself in few(or more) sentences that might be interesting for others"
//             />
//             <label htmlFor="interests">Interests</label>
//             <input
//               className="interests"
//               type="text"
//               placeholder="What are you for?"
//             />
//             <label htmlFor="skills">Skills</label>
//             <input className="html" type="checkbox" value="skill_HTML" /> HTML
//             <input className="css" type="checkbox" value="skill_CSS" /> CSS
//             <input className="js" type="checkbox" value="skill_JavaScript" />
//             JavaScript
//             <input
//               className="datab"
//               type="checkbox"
//               value="skill_Database"
//             />{" "}
//             Database
//             <input className="node" type="checkbox" value="skill_Node" />
//             Node.JS
//             <input className="react" type="checkbox" value="skill_React" />
//             React.JS
//             <input className="cli" type="checkbox" value="skill_CLI" /> CLI
//             <input className="git" type="checkbox" value="skill_GitHub" />
//             GitHub
//             <label className="languages" htmlFor="languages">
//               Languages
//             </label>
//             <input className="eng" type="checkbox" value="lang_eng" /> English
//             <input className="fr" type="checkbox" value="lang_fr" /> French
//             <input className="du" type="checkbox" value="lang_du" /> Dutch
//             <input className="es" type="checkbox" value="lang_es" /> Spanish
//             <input className="ar" type="checkbox" value="lang_ar" /> Arabic
//             <input className="tr" type="checkbox" value="lang_tr" /> Turkish
//             <input className="rus" type="checkbox" value="lang_rus" /> Russian
//             <input className="script" type="checkbox" value="lang_JS" />{" "}
//             JavaScript
//           </fieldset>
