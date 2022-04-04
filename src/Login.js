import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginForm from './LoginForm';
// import LoginForm from './LoginForm';
import './page-style-css/Login.css';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '75%' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginForm 
          handleUsernameInput={this.props.handleUsernameInput}
          handleEmailInput={this.props.handleEmailInput}/>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
