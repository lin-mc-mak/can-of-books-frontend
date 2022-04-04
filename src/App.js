import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './Profile';
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import './page-style-css/App.css';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: null,
    }
  }

  handleUsernameInput = (user) => {
    this.setState({
      user
    })
  }

  handleEmailInput = (email) => {
    this.setState({
      email
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
      email: null,
    })
  }

  render() {
    return (
      <>
        <Container className='app-container'> 
        <Router>
            
            
            <Header
              user={this.state.user}
              logoutHandler={this.logoutHandler}
            />
            
            
            <Switch>
              <Route exact path="/">

                {this.state.user

                  ?

                  <BestBooks
                    // handleBookCreation={this.handleBookCreation}
                    email={this.state.email}
                  />

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


            <Footer className='app-Footer' />



          </Router>
        </Container>
      </>
    )
  }
}

export default App;
