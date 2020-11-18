import React from "react";
import SingleBook from "./SingleBook"


const BookList = (props) => {
  return (     
    props.arr.map((item)=>(<SingleBook book={item} key={item.asin}/>  ))   
  );
};

export default BookList;
