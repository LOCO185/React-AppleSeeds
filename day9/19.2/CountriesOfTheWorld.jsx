import React, { useState, useEffect } from "react";
import axios from "axios";

const CountriesOfTheWorld = () => {
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);
  //   console.log(data);

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get(
        "https://intense-mesa-62220.herokuapp.com/https://restcountries.herokuapp.com/api/v1/"
      );
      setData(data);
    };
    getCountries();
  }, []);

  const filterCountries = (value, array) => {
    return array.filter((item) => {
      return item.name.common.toLowerCase().includes(value);
    });
  };

  const countries = () => {
    if (data.length > 0) {
      return filterCountries(term, data).map((country) => {
        return <li key={country.cca2}>{country.name.common}</li>;
      });
    }
  };
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <ul>{countries()}</ul>
    </div>
  );
};

export default CountriesOfTheWorld;
