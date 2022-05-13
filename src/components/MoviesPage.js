import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {

  const renderMovies = Object.keys(moives).map((movieID) =>
  <li key={movieID}>
    <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  </li>
  
  );

  return <ul>{renderMovies}</ul>;
}
export default MoviesPage;
