import { Component } from "react";
import { Container, Card } from "react-bootstrap";

class Profile extends Component {

  render() {
    /* STRETCH TODO: if no logged in user then redirect home */
    console.log('props in profile.js - ', this.props);
    return (
      // render logged in user info here
      <Container>
        <Card style={{ width: '75%' }}>
          <Card.Title style={{ fontSize: 25 }}>Welcome, {this.props.user}!</Card.Title>
          <Card.Img variant="top" src="http://via.placeholder.com/640x360" />
          <Card.Body>
            <Card.Subtitle style={{ fontSize: 8 }}>
              Your Email:{this.props.email}</Card.Subtitle>
            <Card.Text>
              Bio: I love adventures and reading human letters to create imagery in my mind!
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
};

export default Profile;
