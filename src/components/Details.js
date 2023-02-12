import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const [character, setCharacter] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://anapioficeandfire.com/api/characters/${id}`)
      .then((response) => {
        setCharacter(response.data);
      });
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      {character.culture && <p>Culture: {character.culture}</p>}
      
      <p>Born: {character.born}</p>
      <p>Died: {character.died}</p>
      <p>Gender: {character.gender}</p>
      <p>Titles: {character.titles && character.titles.join(", ")}</p>
      <p>Aliases: {character.aliases && character.aliases.join(", ")}</p>
    </div>
  );
};

export default Details;
