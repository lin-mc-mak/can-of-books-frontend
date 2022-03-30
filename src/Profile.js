import { Component } from "react";

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */

    console.log('props in profile.js - ', this.props);
    return <p>Welcome, {this.props.user}</p>
  }
};

export default Profile;
