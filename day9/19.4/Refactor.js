import React, { useEffect, useState } from "react";
import Btn from "./Btn";
import axios from "axios";

const Refactor = () => {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await axios.get(
          "https://api.chucknorris.io/jokes/categories"
        );
        setCategories(categoriesData.data);
      } catch (e) {
        console.log(e);
      }
    };

    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories]);

  const handleClick = async (text) => {
    try {
      const results = await axios.get(
        "https://api.chucknorris.io/jokes/random",
        {
          params: { category: text },
        }
      );
      setJoke(results.data.value);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRandomClick = async () => {
    try {
      const results = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      setJoke(results.data.value);
    } catch (e) {
      console.log(e);
    }
  };

  const displayCategories = () => {
    return categories.map((name, i) => {
      return <Btn key={i} text={name} clickHandle={handleClick} />;
    });
  };

  return (
    <div className="Refactor">
      <Btn text="random" clickHandle={handleRandomClick} />
      <div className="categories">{displayCategories()}</div>
      {joke}
    </div>
  );
};

export default Refactor;