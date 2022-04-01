import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Container } from 'react-bootstrap';
import BestBooks from './BestBooks';
import Profile from './Profile';
import Login from './Login'
import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER;
const API_URL = `${SERVER}/books`;

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: null,
      addedBooks: [],
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
      addedBooks: []
    })
  }

  // event listener activating this is on the 'Save Book' button on modal and this will add to database.
  handleBookCreation = async (bookInfo) => {
    try {
      const response = await axios.post(API_URL, bookInfo);
      const newBook = response.data;
      this.setState
        ({ addedBooks: [...this.state.addedBooks, newBook] });
    } catch (error) {
      Promise.resolve().then(() => {
        throw new Error(error.message);
      });
    }
  }

  render() {
    // console.log(this.state.addedBooks);
    // console.log('app state',this.state);
    // console.log('email in app state',this.state.email);
    // console.log(this.state.books,'app state books');

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
                    handleBookCreation={this.handleBookCreation}
                    email={this.state.email}
                    addedBooks={this.state.addedBooks}


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
