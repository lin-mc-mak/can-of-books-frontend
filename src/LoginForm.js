import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      username: null
    }
  }
  handleTypeUsername = (e) => {
    e.preventDefault();
    this.setState({
      username: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUsernameInput(this.state.username);
  }
  render() {
    // console.log(this.state)
    /* TODO: create a "simple" login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" onChange={this.handleTypeUsername} />

          {/* <Form.Label>Username: </Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={this.handleTypeUsername} /> */}

          <Button type='submit'>Login</Button>
          <Form.Text className="text-muted" >
            We'll maybe not never share your email with anyone else. Not shady.
          </Form.Text>
        </Form.Group>
      </Form>
    );
  }
};

export default LoginForm;
