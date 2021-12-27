import React, { useState, useEffect } from "react";
import axios from "axios";

const SimpleFetch = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get(
        "https://intense-mesa-62220.herokuapp.com/https://swapi.dev/api/films/1/"
      );
      setData(data);
    };
    getMovie();
  }, []);

  return (
    <div className="item">
      <div className="header">{data.title}</div>
      <div className="director">{data.director}</div>
    </div>
  );
};

export default SimpleFetch;
