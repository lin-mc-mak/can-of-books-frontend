import React from 'react';
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm';

export default class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: null,
    }
  }
  handleLoginButton = () => {
    this.setState({
      buttonClicked: true
    })
  }

  render() {
    // console.log(this.props)
    if (this.state.buttonClicked) {
      return <LoginForm
        handleUsernameInput={this.props.handleUsernameInput}
        handleEmailInput={this.props.handleEmailInput} 
        />
    } else {
      return < Button type="submit" onClick={this.handleLoginButton} > Login</Button >
    }
    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
  }
}
