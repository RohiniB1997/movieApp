import React from "react";

function SearchBar({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return <input type="text" onChange={handleSearch} placeholder="Search movies" />;
}

export default SearchBar;