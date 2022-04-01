import React from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';
import BookFormModal from './BookFormModal';

const SERVER = process.env.REACT_APP_SERVER;
const API_URL = `${SERVER}/books`;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showCarousel: false,
    }
  };

  // Function gets current books from data base on initial page load
  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data,
        showCarousel: true
      })
    } catch (error) {
      Promise.resolve().then(() => {
        throw new Error(error.message);
      });
    }
  }

  componentDidMount() {
    this.getBooks();
  }


  // event listener activating this is on the 'Save Book' button on modal and this will add to database.
  handleBookCreation = async (newBookInfo) => {
    try {
      const createdBook = await axios.post(API_URL, newBookInfo);
      const newBook = createdBook.data;
      this.setState
        ({ books: [...this.state.books, newBook] });

      console.log(this.state.books);

    } catch (error) {
      Promise.resolve().then(() => {
        throw new Error(error.message);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Can-Of-Books</h2>
        {
          this.state.showCarousel
            ?
            // DISPLAYING OUR CURRENT DATABASE BOOKS THAT ARE SAVED INTO STATE ON CAROUSEL
            <Container style={{ width: '75%', height: '400px' }}>
              <Carousel>
                {this.state.books.map(book => (
                  <Carousel.Item key={book._id}>
                    <h3>
                      Book Title: {book.title}
                    </h3>
                    <h4>Overview: {book.description}</h4>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Container>

            :

            <p>the book collection is empty</p>
        }

        < BookFormModal
          handleBookCreation={this.handleBookCreation}
          email={this.props.email}
        />

      </>
    )
  }
}

export default BestBooks;
