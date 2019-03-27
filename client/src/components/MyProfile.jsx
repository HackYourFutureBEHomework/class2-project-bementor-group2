import React, { Fragment, Component } from "react";
import "../assets/css/Profile.css";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentor: "",
      mentee: "",
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      tagline: "",
      location: "",
      bio: "",
      interests: "",
      html: "",
      css: "",
      js: "",
      datab: "",
      node: "",
      react: "",
      cli: "",
      git: "",
      eng: "",
      fr: "",
      du: "",
      es: "",
      ar: "",
      tr: "",
      rus: "",
      script: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = this.state.firstName + " " + this.state.lastName;
  }
  componentDidUpdate() {
    document.title = this.state.firstName + " " + this.state.lastName;
  }

  handleInputChange(e) {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      mentor,
      mentee,
      firstName,
      lastName,
      password,
      email,
      tagline,
      location,
      bio,
      interests,
      html,
      css,
      js,
      datab,
      node,
      react,
      cli,
      git,
      eng,
      fr,
      du,
      es,
      ar,
      tr,
      rus,
      script
    } = this.state;

    fetch(`http://localhost:4000/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mentor,
        mentee,
        firstName,
        lastName,
        password,
        email,
        tagline,
        location,
        bio,
        interests,
        html,
        css,
        js,
        datab,
        node,
        react,
        cli,
        git,
        eng,
        fr,
        du,
        es,
        ar,
        tr,
        rus,
        script
      })
    })
      .then(res => {
        console.log(res);
        res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({
          mentor,
          mentee,
          firstName,
          lastName,
          password,
          email,
          tagline,
          location,
          bio,
          interests,
          html,
          css,
          js,
          datab,
          node,
          react,
          cli,
          git,
          eng,
          fr,
          du,
          es,
          ar,
          tr,
          rus,
          script
        });
        console.log(this.state.user);
      });
  };

  render() {
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
            <label htmlFor="mentorOrMentee">I would like to be...</label>
            <input
              className="mentor"
              type="checkbox"
              value={this.state.mentor}
              onChange={this.handleInputChange}
              name="mentor"
            />
            Mentor
            <input
              className="mentee"
              type="checkbox"
              value={this.state.mentee}
              onChange={this.handleInputChange}
            />
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
                  onChange={this.handleInputChange}
                  value={this.state.firstName}
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
                  onChange={this.handleInputChange}
                  value={this.state.lastName}
                  required
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  name="password"
                  className="password"
                  type="password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                  placeholder="password"
                  required
                />
              </label>
              <label htmlFor="e-mail">e-mail</label>
              <input
                className="email"
                type="text"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Your e-mail will not be visible for others and used only for notification"
              />
            </fieldset>
            <fieldset>
              <legend>
                <span className="number">2</span>Your profile
              </legend>
              <label htmlFor="tagline">Tagline</label>
              <input
                className="tagline"
                type="text"
                value={this.state.tagline}
                onChange={this.handleInputChange}
                name="tagline"
                placeholder="Your motto"
              />
              <label htmlFor="location">Location</label>
              <input
                className="location"
                type="text"
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Where you are"
              />
              <label htmlFor="bio">BIO</label>
              <input
                className="bio"
                type="text"
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="Describe yourself in few(or more) sentences that might be interesting for others"
              />
              <label htmlFor="interests">Interests</label>
              <input
                className="interests"
                type="text"
                value={this.state.interests}
                onChange={this.handleInputChange}
                name="interests"
                placeholder="What are you for?"
              />
              <label htmlFor="skills">Skills</label>
              <input
                className="html"
                type="checkbox"
                value={this.state.html}
                onChange={this.handleInputChange}
                name="html"
              />
              HTML
              <input
                className="css"
                type="checkbox"
                value={this.state.css}
                onChange={this.handleInputChange}
                name="css"
              />
              CSS
              <input
                className="js"
                type="checkbox"
                value={this.state.js}
                onChange={this.handleInputChange}
                name="js"
              />
              JavaScript
              <input
                className="datab"
                type="checkbox"
                value={this.state.datab}
                onChange={this.handleInputChange}
                name="datab"
              />
              Database
              <input
                className="node"
                type="checkbox"
                value={this.state.node}
                onChange={this.handleInputChange}
                name="node"
              />
              Node.JS
              <input
                className="react"
                type="checkbox"
                value={this.state.react}
                onChange={this.handleInputChange}
                name="react"
              />
              React.JS
              <input
                className="cli"
                type="checkbox"
                value={this.state.cli}
                onChange={this.handleInputChange}
                name="cli"
              />
              CLI
              <input
                className="git"
                type="checkbox"
                value={this.state.git}
                onChange={this.handleInputChange}
              />
              GitHub
              <label className="languages" htmlFor="languages">
                Languages
              </label>
              <input
                className="eng"
                type="checkbox"
                value={this.state.eng}
                onChange={this.handleInputChange}
                name="eng"
              />
              English
              <input
                className="fr"
                type="checkbox"
                value={this.state.fr}
                onChange={this.handleInputChange}
                name="fr"
              />
              French
              <input
                className="du"
                type="checkbox"
                value={this.state.du}
                onChange={this.handleInputChange}
                name="du"
              />
              Dutch
              <input
                className="es"
                type="checkbox"
                value={this.state.es}
                onChange={this.handleInputChange}
                name="es"
              />
              Spanish
              <input
                className="ar"
                type="checkbox"
                value={this.state.ar}
                onChange={this.handleInputChange}
              />
              Arabic
              <input
                className="tr"
                type="checkbox"
                value={this.state.tr}
                onChange={this.handleInputChange}
              />
              Turkish
              <input
                className="rus"
                type="checkbox"
                value={this.state.rus}
                onChange={this.handleInputChange}
              />
              Russian
              <input
                className="script"
                type="checkbox"
                value={this.state.script}
                onChange={this.handleInputChange}
              />
              JavaScript
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
