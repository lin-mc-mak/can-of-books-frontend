import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton'
// import LoginForm from './LoginForm';
import './Login.css';

class Login extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginButton 
          handleUsernameInput={this.props.handleUsernameInput}
          handleEmailInput={this.props.handleEmailInput}/>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
