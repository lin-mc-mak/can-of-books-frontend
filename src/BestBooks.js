import React from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import EditBooksPageButton from './EditBooksPageButton';
import BookDeleteForm from './BookDeleteForm';

const SERVER = process.env.REACT_APP_SERVER;
const API_URL = `${SERVER}/books`;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showCarousel: false,
      showDeleteForm: false,
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
      console.log('book state', this.state.books);
    } catch (error) {
      Promise.resolve().then(() => {
        throw new Error(error.message);
      });
    }
  }


  // FUNCTION OPENS BOOK DELETE/UPDATE FORM
  openBookDeleteForm = () => {
      this.setState({
        showDeleteForm: true,
      })
  }


  // FUNCTION DELETES BOOK FROM DATABASE BY ID
  handleDeleteBooks = async (id) => {
    try {
    
      // console.log('book title being sent to delete fn', id);
      let url = `${SERVER}/books/${id}`;
      await axios.delete(url);
      // console.log('url sent in delete', url);
      // creates a new array without the book we just deleted
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      // console.log('state of books should remove the book we delete', updatedBooks);
      this.setState({
        books: updatedBooks
      })

    } catch (error) {
      Promise.resolve().then(() => {
        throw new Error(error.message);
      });
    }
  }


  render() {
    // console.log(this.state.books);
    console.log(this.props, 'books props');
    return (
      <>
        <h2>Can-Of-Books</h2>
        {
          this.state.showCarousel
            ?
            // DISPLAYING OUR CURRENT DATABASE BOOKS THAT ARE SAVED INTO STATE ON CAROUSEL
            <Container style={{ width: '100%', height: '400px' }}>
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

        {this.state.showDeleteForm
          ?
          <BookDeleteForm
            booksWeHave={this.state.books}
            handleDeleteBooks={this.handleDeleteBooks}
            email={this.props.email}

          />
          :
          <EditBooksPageButton
            openBookDeleteForm={this.openBookDeleteForm}
          />
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

