import React from "react";
import { Card, Button } from "react-bootstrap";



class SingleBook extends React.Component {
  state={
    selected:false
  }

  render(){
    return(
      <Card style={{ width: "18rem" }} className="mx-auto">
      <Card.Img variant="top" src={this.props.book.img} />
      <Card.Body>
        <Card.Title>{this.props.book.title}</Card.Title>
        <Card.Text>${this.props.book.price}</Card.Text>
      </Card.Body>
    </Card>

    )
  }
}

export default SingleBook;
