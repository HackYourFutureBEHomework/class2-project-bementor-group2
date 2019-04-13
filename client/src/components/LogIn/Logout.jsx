import React from "react";
import Container from "../Container";

class Logout extends React.Component {
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.history.push("/");
    }, 2000);
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
  render() {
    return (
      <Container>
        <h1>Thank you, being with us!</h1>
        <h1>Hope to see you soon!</h1>
      </Container>
    );
  }
}
export default Logout;
