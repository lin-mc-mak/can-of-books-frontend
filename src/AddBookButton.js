import { Component } from "react";
import { Button } from "react-bootstrap";

class AddBookButton extends Component {
  render() {
    return (
      <Button onClick={this.props.handleAddBook}>
        Add Book To Collection!
      </Button>
    );
  }
};

export default AddBookButton;