import React from "react";
import SingleBook from "./SingleBook";
import { Form } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    booklist: this.props.arr,
  };

  filterBookList = (input) => {
    this.setState({
      booklist: this.props.arr.filter((book) =>
        book.title.toLowerCase().includes(input.toLowerCase())
      ),
    });
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => this.filterBookList(e.target.value)}
              type="text"
              placeholder="Search for book"
            />
          </Form.Group>
        </Form>
        {this.state.booklist.map((item) => (
          <SingleBook book={item} key={item.asin} />
        ))}
      </>
    );
  }
}

export default BookList;
