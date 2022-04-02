import React from 'react';
// import Form from 'react-bootstrap/Form';
import { Container, ListGroup } from 'react-bootstrap';
import Book from './Book';


class BookDeleteForm extends React.Component {

  render() {
    console.log('books as props on form', this.props.booksWeHave)
    let books = this.props.booksWeHave.map(book => (
      <Book
        book={book}
        key={book._id}
        booksWeHave={this.props.booksWeHave}
        handleDeleteBooks={this.props.handleDeleteBooks}
        email={this.props.email}


      />
    ))
    return (
        <Container>
          <ListGroup>
            {books}
          </ListGroup>
        </Container>
    )
  }
}

export default BookDeleteForm;