import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      {/*
    Movie List - popular
       moviecards *n 
    MOvie List - Now Playing
    Movie List - trending
    Movie List - horror 
    */}
    </div>
  );
};

export default SecondaryContainer;
