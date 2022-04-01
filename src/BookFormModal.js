import { Component } from "react";
import { Button, FormGroup, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import AddBookButton from "./AddBookButton";

class BookFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBookForm: false,
    };
  }

  handleAddBook = () => {
    // console.log("handleAddBook was called");
    this.setState({
      newBookForm: true,
    });
  };


  // Take new book form inputs and call function 'handleBookCreation prop ' on App.js component to send new book info to database
  handleTitleInput = (e) => {
    e.preventDefault();
    this.props.handleBookCreation({
      title: e.target.bookName.value,
      description: e.target.bookDescription.value,
      email: this.props.email,
      status: true
    })
    this.props.updateBookCarousel();
    this.setState({
      newBookForm: false
    });
  };


  render() {
    // console.log('status state on book modal',this.state.status);
    // console.log(this.props, 'props on form');
    return (
      <>
        {this.state.newBookForm
          ?
          (<Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Form onSubmit={this.handleTitleInput}>

                {/* TAKING IN BOOK TITLE */}
                <FormGroup controlId="bookName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter New Book Here" />
                </FormGroup>


                {/* TAKING IN BOOK DESCRIPTION */}
                <FormGroup controlId="bookDescription">
                  <Form.Label>Description: </Form.Label>
                  <Form.Control type="text" placeholder="Enter book description" />
                </FormGroup>


                {/* TAKING IN DROPDOWN STATUS */}
                {/* <FormGroup controlId="bookStatus">
                  <Form.Select >
                    <option value="false" >Unread</option>
                    <option value="true">Read</option>
                  </Form.Select>
                </FormGroup> */}


                {/* SUBMIT NEW BOOK BUTTON */}
                <Button variant="primary" type="submit">
                  Save Book
                </Button>
              </Form>


            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal.Dialog>


          )

          :

          (<AddBookButton handleAddBook={this.handleAddBook} />)


        }
      </>
    );
  }
}

export default BookFormModal;
