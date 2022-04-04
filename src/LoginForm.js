import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null
    }
  }

  // typing username in form below
  handleTypeUsername = (e) => {
    // e.preventDefault();
    this.setState({
      username: e.target.value,
    })
  }

  // typing email in form below
  handleTypeEmail = (e) => {
    // e.preventDefault();
    this.setState({
      email: e.target.value,
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUsernameInput(this.state.username);
    this.props.handleEmailInput(this.state.email);
  }
  
  // render() {
    // console.log('form state', this.state);
    
    
    const LoginForm = () => {
      const { loginWithRedirect } = useAuth0();
    
      return <button onClick={() => loginWithRedirect()}>Log In</button>;
    
    
    // return (
    //   <Form onSubmit={this.handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control type="email" placeholder="Enter email" onChange={this.handleTypeEmail} />

    //       <Form.Label>Username: </Form.Label>
    //       <Form.Control type="text" placeholder="Enter username" onChange={this.handleTypeUsername} />

    //       <Button type='submit'>Login</Button>
    //       <Form.Text className="text-muted" >
    //         We'll maybe not never share your email with anyone else. Not shady.
    //       </Form.Text>
    //     </Form.Group>
    //   </Form>
    // );
    // }
  }
};

export default LoginForm;


// };

// export default LoginButton;