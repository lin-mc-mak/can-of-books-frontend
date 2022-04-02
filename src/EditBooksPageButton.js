import { Component } from "react";
import { Button } from "react-bootstrap";

class EditBooksPageButton extends Component {

  render() {
    return (
      <Button variant="danger" onClick={this.props.openBookDeleteForm}>
        Delete Book
      </Button>
    );
  }
};

export default EditBooksPageButton;
