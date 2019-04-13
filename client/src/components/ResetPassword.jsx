import React, { Component } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

import "../assets/css/Login.css";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: "",
      password2: "",
      passwordsEqual: true,
      passwordChanged: false
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.state.password1 !== this.state.password2 &&
      this.setState({ passwordsEqual: false });
    this.setState({
      password1: this.state.password1,
      password2: this.state.password2,
      passwordChanged: true
    });
  };

  render() {
    const { passwordChanged, passwordsEqual } = this.state;
    console.log(this.state);

    return (
      <Container>
        {!passwordChanged && (
          <form className="userForm_reset">
            <div className="userForm_container">
              <h1>Reset your password</h1>
              {!passwordsEqual && (
                <label className="registerNotification">
                  Passwords does not match
                </label>
              )}
              <input
                name="password1"
                className="password"
                type="password"
                onChange={this.handleInputChange}
                value={this.state.password}
                placeholder="Type new password"
                required
              />

              <input
                name="password2"
                className="password"
                type="password"
                onChange={this.handleInputChange}
                value={this.state.password}
                placeholder="Re-enter new password"
                required
              />
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
        {passwordChanged && (
          <form className="userForm">
            <Link className="backButton_dialog" to="/login" />
            <h3>New password was set. Please login with new password.</h3>
          </form>
        )}
      </Container>
    );
  }
}

export default ResetPassword;
