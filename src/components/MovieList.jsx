import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
    console.log(movies)
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          <MovieCards />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
