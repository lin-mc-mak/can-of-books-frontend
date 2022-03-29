import React from 'react';
import axios from 'axios';

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  };


  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      console.log('sent to server', results);
      this.setState({
        books: results.data
      })

      console.log(this.state.books);
    } catch (error) {
      console.log('an error has occured: ', error.response.data)
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
