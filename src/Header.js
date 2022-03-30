import React from 'react';
import { Navbar, NavItem, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {
          this.props.user &&
          <Container>
            <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
            <NavItem><Link to="/" className="nav-link">
              <LogoutButton
                logoutHandler={this.props.logoutHandler}
              />
            </Link></NavItem>
          </Container>
        }
      </Navbar>
    )
  }
}

export default Header;
