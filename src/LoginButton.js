import { Component, Button } from 'react-bootstrap'

export default class LoginButton extends Component {

  

  render() {

    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <Button type="submit" onSubmit='handleSubmit' >Login</Button>

    )
  }
}
