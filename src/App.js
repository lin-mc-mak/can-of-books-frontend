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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      books: [],
    }
  }

  loginHandler = (user) => {
    this.setState({
      user: null,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }



  render() {

    console.log('app state',this.state);
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <BestBooks />
            </Route>

            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path='/profile'>
              <Profile
                books={this.state.books} />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
