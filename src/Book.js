import React from 'react';
import { ListGroup, Container, Button } from 'react-bootstrap';

class Book extends React.Component {
  render() {
    // console.log('current books in carousel and database', this.props.book);
    return (
      <>
        <ListGroup.Item  >
          <div> Title: {this.props.book.title} </div>
          <div>Description: {this.props.book.description}</div>

          <Container>

            <div>

              {this.props.email.toLowerCase() === this.props.book.email
              &&
                <Button
                  variant='danger'
                  onClick={() => this.props.handleDeleteBooks(this.props.book._id)}
                >
                  Delete book
                </Button>
              }

            </div>
          </Container>


        </ListGroup.Item>
      </>
    )
  }
}
// action onClick={alertClicked}

export default Book;
