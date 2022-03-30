import { Component } from "react";
import { Button, FormGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
class BookFormModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: {},

    }
  }

  handleTitleInput = (e) => {
    e.preventDefualt();
    this.props.onCreate({
      name: e.target.bookName.value,
      description: e.target.bookDescription.value,
      status: e.target.bookStatus.value,
    })
  }

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleTitleInput}>
            <FormGroup controlID="bookName">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter New Book Here"/>
            </FormGroup>

            <FormGroup controlID="bookDescription">
              <Form.Label>Username: </Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </FormGroup>

            <FormGroup controlID="bookStatus">

              <Form.Label>Status: </Form.Label>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item controlId="Unread">Unread</Dropdown.Item>
                <Dropdown.Item controlId="Reading">Reading</Dropdown.Item>
                <Dropdown.Item controlId="Finished">Finished!</Dropdown.Item>
              </DropdownButton>
            </FormGroup>
          </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" type="submit">Save Book</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
};

export default BookFormModal;
