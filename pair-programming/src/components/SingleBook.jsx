import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="mx-auto">
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>${props.book.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
