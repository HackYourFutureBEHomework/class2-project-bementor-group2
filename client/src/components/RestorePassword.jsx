import React, { Component } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

import { login } from "../api/users";

import "../assets/css/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      restoreSent: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: this.state.email,
      restoreSent: true
    });
  };

  render() {
    const { email, restoreSent } = this.state;
    console.log(this.state);

    return (
      <Container>
        {!restoreSent && (
          <form className="userForm">
            <div className="userForm_container">
              <h1>Restore your password</h1>
              <label className="required">
                E-mail
                <input
                  className="email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                  placeholder="Please enter e-mail that you used to register"
                  required
                />
              </label>
            </div>
            <button
              className="submit_button"
              type="submit"
              onClick={e => this.handleSubmit(e)}
            >
              Restore password
            </button>
          </form>
        )}
        {restoreSent && (
          <form className="userForm">
            <Link className="backButton" to="/login" />
            <h3>
              Instructions to reset your password were sent to email
              <label className="email">{email}</label>
              Please check your inbox
            </h3>
          </form>
        )}
      </Container>
    );
  }
}

export default Login;
