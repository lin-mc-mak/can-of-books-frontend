import React from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showCarousel: false
    }
  };


  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data,
        showCarousel: true
      })
      console.log(this.state.books);
      console.log(this.state.showCarousel);
    } catch (error) {
      console.log('an error has occurred: ', error.response.data)
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <h2>Can-Of-Books</h2>
        {
          this.state.showCarousel
            ?
            <Container>
              <Carousel>
                {this.state.books.map(book => (
                  <Carousel.Item key={book._id}>
                    <h3>
                      Book Title: {book.title}
                    </h3>

                  </Carousel.Item>
                ))}
              </Carousel>
            </Container>
            :
            <p>the book collection is empty</p>
        }
      </>
    )
  }
}

export default BestBooks;
