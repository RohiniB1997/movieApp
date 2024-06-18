import React, { useState } from "react";
import "./App.css";
import moviesData from "./moviesData";
import GenreDropdown from "./components/GenreDropdown";
import RatingDropdown from "./components/RatingDropdown";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";




function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);

  const filterMovies = () => {
    let filteredMovies = [...moviesData];
  
    if (searchTerm.trim().length > 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    if (selectedGenre.length > 0 && selectedGenre[0] !== "Any Genre") {
      filteredMovies = filteredMovies.filter((movie) => selectedGenre.includes(movie.genre));
    }
  
    if (selectedRating.length > 0 && selectedRating[0] !== 0) {
      filteredMovies = filteredMovies.filter((movie) => selectedRating.includes(movie.rating));
    }
  
    return filteredMovies;
  };
  
  
  
  const shouldShowMovieList = searchTerm.trim().length > 0 || selectedGenre.length > 0 || selectedRating.length > 0;

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
        <SearchBar onSearch={setSearchTerm} />
        <div style={{ marginLeft: "16px" }}>
          <RatingDropdown
            onRatingSelect={setSelectedRating}
            selectedRating={selectedRating}
          />
        </div>
        <div style={{ marginLeft: "16px" }}>
          <GenreDropdown
            onGenreSelect={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </div>
      </div>
      {shouldShowMovieList && <MovieList movies={filterMovies()} />}
    </div>
  );
}

export default App;