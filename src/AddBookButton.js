import { Component } from "react";
import { Button } from "react-bootstrap";

class AddBookButton extends Component {




  render() {
    return (
      <Button onClick={this.props.handleAddBook}>
        Add Bookeee
      </Button>
    );
  }
};

export default AddBookButton;