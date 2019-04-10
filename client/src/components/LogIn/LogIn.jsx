import React, { Component } from "react";
import Container from "../Container";
import { Link, Redirect } from "react-router-dom";

import { login } from "../../api/users";

import "../../assets/css/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectToMain: false,
      loginFail: false
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    login(this.state.email, this.state.password)
      .then(async () => {
        this.props.history.push("/");
      })

      .catch(e => {
        this.setState({
          loginFail: true
        });
        console.log("check email or password");
      });
  };

  render() {
    const { loginFail } = this.state;

    return (
      <Container>
        }
        <form method="post" className="userForm" onSubmit={this.handleSubmit}>
          <div className="userForm_container">
            <h1>Welcome to BeMentor</h1>
            {!loginFail && (
              <label className="registerNotification">
                Email or password are incorrect. try again or{" "}
                <Link to="/myprofile">register</Link>
              </label>
            )}
            <label className="required">
              E-mail
              <input
                className="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Please enter your e-mail"
                required
              />
            </label>
            <label className="required">
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
            <Link className="forgotPass_btn" to="/restore" value>
              Forgot your password?
            </Link>
          </div>
          <button className="submit_button" type="submit" value="let me Be!">
            I am back!
          </button>
        </form>
      </Container>
    );
  }
}

export default Login;
