import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AlogoliaAPI() {
  const [Searches, setSearches] = useState([]);

  const [SearchTerm, setSearchTerm] = useState("hooks");

  const [isLoading, setIsLoading] = useState(false);

  const getSearches = async (value) => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${value}`
    );
    setSearches(data.hits);
    setIsLoading(false);
  };

  useEffect(() => {
    getSearches(SearchTerm);
  }, []);

  const renderSearches = () => {
    if (Searches.length > 0) {
      return Searches.map((hit) => {
        return (
          <li key={hit.created_at_i}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        );
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={SearchTerm}
        placeholder="Search..."
      />
      <button onClick={() => getSearches(SearchTerm)}>Search</button>
      {isLoading && <div>Loading...</div>}
      <ul>{renderSearches()}</ul>
    </div>
  );
}
