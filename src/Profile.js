import { Component } from "react";
import { Container } from "react-bootstrap";

class Profile extends Component {

  render() {
    /* STRETCH TODO: if no logged in user then redirect home */
    console.log('props in profile.js - ', this.props);
    return (
      // render logged in user info here
      <Container>
        <p>Welcome, {this.props.user}</p>
        <p>{this.props.email} currently logged in</p>
      </Container>
    )
  }
};

export default Profile;
