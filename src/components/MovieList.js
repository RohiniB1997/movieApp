import React from "react";
import generateStars from "./GenerateStars";
function MovieList({ movies }) {

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title} - {movie.genre} - {generateStars(movie.rating)}
        </li>
      ))}
    </ul>
  );
}

export default MovieList;