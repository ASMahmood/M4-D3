import React from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  };

  render() {
    return (
      <Card
        onClick={() => this.toggleSelected()}
        style={{ width: "18rem" }}
        className={
          this.state.selected === true ? "bg-primary mx-auto" : "mx-auto"
        }
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>${this.props.book.price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
