import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const [book, setBook] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://anapioficeandfire.com/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
      });
  }, [id]);

  return (
    <div>
      <h1>{book.name}</h1>
      {book.country && <p>Country: {book.country}</p>}
      {book.isbn && <p>ISBN: {book.isbn}</p>}
      {book.mediaType && <p>Media Type: {book.mediaType}</p>}
      <p>Authors: {book.authors && book.authors.join(", ")}</p>
      {book.released && <p>Media Type: {book.mediaType}</p>}
      
    </div>
  );
};

export default Details;
