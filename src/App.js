import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
// import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import './page-style-css/App.css';
import { withAuth0 } from '@auth0/auth0-react';
// 3 new routes with OAuth
import Profile from './Profile';
import OAuthLogout from './OAuthLogout';
import LoginForm from './LoginButton';



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
                {/* this.state.user */}
                {/* this.props.auth0.isAuthenticated */}
                {this.props.auth0.isAuthenticated

                  ?
                  <>
                    <OAuthLogout />

                    <BestBooks
                      // handleBookCreation={this.handleBookCreation}
                      email={this.state.email}
                    />

                  </>

                  :

                  <LoginForm />
                  // <Login
                  //   handleUsernameInput={this.handleUsernameInput}
                  //   handleEmailInput={this.handleEmailInput}
                  // />
                }

                {this.props.auth0.isAuthenticated
                  ?
                  <>
                    <Profile />
                  </>
                  :
                  <>
                    <p>Please log in</p>
                  </>
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

export default withAuth0(App);
