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
    if (this.state.buttonClicked) {
      return <LoginForm
        handleUsernameInput={this.props.handleUsernameInput}
        handleEmailInput={this.props.handleEmailInput} 
        />
    } else {
      return < Button onClick={this.handleLoginButton} > Login</Button >
    }
  }
}

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;
