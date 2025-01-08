import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () => {
  

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0 && !mainMovie) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMainMovie(movies[randomIndex]); // Lock the random movie
    }
  }, [movies]);

  if (!mainMovie) return <div>Loading...</div>;

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
