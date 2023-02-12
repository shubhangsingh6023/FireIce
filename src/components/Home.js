import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [books, setBooks] = useState([]);
  const [houses, setHouses] = useState([])

  useEffect(() => {
    axios
      .get("https://anapioficeandfire.com/api/characters?page=1&pageSize=1000")
      .then((response) => {
        setCharacters(response.data);
      });
    axios
      .get("https://anapioficeandfire.com/api/books?page=1&pageSize=1000")
      .then((response) => {
        setBooks(response.data);
      });
    axios
      .get("https://anapioficeandfire.com/api/houses?page=1&pageSize=1000")
      .then((response) => {
        setHouses(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.url}>
            <Link to={`/details/${character.url.split("/").pop()}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.url}>
            <Link to={`/detbook/${book.url.split("/").pop()}`}>
              {book.name}
            </Link>
          </li>
        ))}
      </ul>
      <h1>Houses</h1>
      <ul>
        {houses.map((house) => (
          <li key={house.url}>
            <Link to={`/dethouse/${house.url.split("/").pop()}`}>
              {house.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
