import React from 'react';
import axios from 'axios';
import { Carousel, Container } from 'react-bootstrap';
import BookFormModal from './BookFormModal';

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showCarousel: false
    }
  };

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data,
        showCarousel: true
      })
    } catch (error) {
      console.log('an error has occurred: ', error.response.data)
    }
  }
// super secret commented out line
  postBook = async (newBook) => {
    try {
      let createdBook = await axios.post(`${SERVER}/books`, newBook);
      console.log(createdBook, 'Book posted to DB');
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  handleBookSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      email: this.props.email,
      status: false,
    }
    this.postBook(newBook);
  }



  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.props, 'our best books props');
    return (
      <>
        <h2>Can-Of-Books</h2>
        {
          this.state.showCarousel
            ?
            <Container style={{ width: '75%' }}>
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
        <BookFormModal
        onCreate={this.props.onCreate}
        /> 
      </>
    )
  }
}

export default BestBooks;
