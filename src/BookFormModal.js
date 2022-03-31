import { Component } from "react";
import { Button, FormGroup, Modal, Form } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import AddBookButton from "./AddBookButton";

class BookFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {},
      newBookForm: false,
    };
  }

  handleAddBook = () => {
    console.log("handleAddBook was called");
    this.setState({
      newBookForm: true,
    });
  };

  handleTitleInput = (e) => {
    e.preventDefault();
    console.log(e.target.bookName.value, 'e.target.bookName', e.target.bookDescription.value, 'description of book in e', e.target.bookStatus.option, 'e.target.status');
    this.props.onCreate({
      name: e.target.bookName.value,
      description: e.target.bookDescription.value,
      status: e.target.bookStatus.value,
    });
  };

  render() {
    console.log(this.state.newBookForm, "newBookForm Boolean");
    return (
      <>
        {this.state.newBookForm ? (
          // <p>hello, newBookForm is now TRUE</p>

          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={this.handleTitleInput}>
                <FormGroup controlId="bookName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter New Book Here" />
                </FormGroup>

                <FormGroup controlId="bookDescription">
                  <Form.Label>Username: </Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </FormGroup>

                <FormGroup controlId="bookStatus">
                  <Form.Label>Status: </Form.Label>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                  >
                    <Dropdown.Item>Unread</Dropdown.Item>
                    <Dropdown.Item>Reading</Dropdown.Item>
                    <Dropdown.Item>Finished!</Dropdown.Item>
                  </DropdownButton>
                </FormGroup>
                <Button variant="primary" type="submit">
                  Save Book
                </Button>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              {/* <Button variant="secondary">Close</Button> */}
            </Modal.Footer>
          </Modal.Dialog>
        ) : (
          <AddBookButton handleAddBook={this.handleAddBook} />
        )}
      </>
    );
  }
}

export default BookFormModal;
