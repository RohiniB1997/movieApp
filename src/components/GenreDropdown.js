import React from "react";
import Select from "react-select";

function GenreDropdown({ onGenreSelect, selectedGenre }) {
  const genres = [
    { value: "Any Genre", label: "Any Genre" },
    { value: "Action", label: "Action" },
    { value: "Comedy", label: "Comedy" },
    { value: "Thriller", label: "Thriller" },
    { value: "Drama", label: "Drama" }
  ];

  const handleGenreSelect = (selectedGenres) => {
    onGenreSelect(selectedGenres.map((genre) => genre.value));
  };

  return (
    <Select
      isMulti
      options={genres}
      value={genres.filter((genre) => selectedGenre.includes(genre.value))}
      onChange={handleGenreSelect}
      placeholder="Genres"
    />
  );
}

export default GenreDropdown;