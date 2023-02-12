import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const [house, setHouse] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://anapioficeandfire.com/api/houses/${id}`)
      .then((response) => {
        setHouse(response.data);
      });
  }, [id]);

  return (
    <div>
      <h1>{house.name}</h1>
      {house.coatOfArms && <p>Coat Of Arms: {house.coatOfArms}</p>}
      {house.region && <p>Region: {house.region}</p>}
      <p>Seats: {house.seats && house.seats.join(", ")}</p>
      <p>Titles: {house.titles && house.titles.join(", ")}</p>
    </div>
  );
};

export default Details;
