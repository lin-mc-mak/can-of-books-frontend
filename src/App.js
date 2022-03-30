import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import Profile from './Profile';
import Login from './Login'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: null,
      // user: {}
      books: [],
    }
  }

  handleUsernameInput = (user) => {
    // e.preventDefault();
    // console.log(e.target.value);
    this.setState({
      user
    })
  }

  handleEmailInput = (email) => {
    // e.preventDefault();
    // console.log(e.target.value);
    this.setState({
      email
    })
  }

  

  // loginHandler = (user) => {
  //   this.setState({
  //     user 
  //   })
  // }

  logoutHandler = () => {
    this.setState({
      user: null,
      email:null,
      books: []
    })
  }



  render() {
    // console.log(this.state.user);
    // console.log('app state',this.state);
    console.log('email in app state',this.state.email);
    return (
      <>
        <Router>
          <Header 
          user={this.state.user} 
          logoutHandler={this.logoutHandler} 
          />
          <Switch>
            <Route exact path="/">

              {this.state.user 
              ?
              <BestBooks />
              :
              <Login
              handleUsernameInput={this.handleUsernameInput}
              handleEmailInput={this.handleEmailInput}
              />
              }

            </Route>

            <Route exact path='/profile'>
              <Profile
                user={this.state.user}
                books={this.state.books}
                email={this.state.email} />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
