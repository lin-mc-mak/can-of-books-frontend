import { Component } from "react";
import { Button, FormGroup, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import AddBookButton from "./AddBookButton";

class UpdateBookModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateBookModal: false,
    };
  }

  handleUpdateBook = () => {
    this.setState({
      UpdateBookModal: true,
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
    this.setState({
      newBookForm: false
    });
  };

  render() {
    return (
      <>
        {this.state.UpdateBookModal
          ?
          (<Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Update Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Form onSubmit={this.handleTitleInput}>

                {/* TAKING IN BOOK TITLE */}
                <FormGroup controlId="bookName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter New Info Here" />
                </FormGroup>


                {/* TAKING IN BOOK DESCRIPTION */}
                <FormGroup controlId="bookDescription">
                  <Form.Label>Description: </Form.Label>
                  <Form.Control type="text" placeholder="Update Book Description" />
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
                  Update Book
                </Button>
              </Form>

            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal.Dialog>

          )

          :

          (<Button handleUpdateBook={this.handleUpdateBook} />)
        }
      </>
    );
  }
}

export default UpdateBookModal;
