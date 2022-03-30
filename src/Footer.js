import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Container className="bottom-footer">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>lin-mc-mak &copy;</Navbar.Brand>
        </Navbar>
      </Container>
    )
  }
}

export default Footer;
