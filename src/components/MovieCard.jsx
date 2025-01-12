import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 h-68 px-2 rounded-2xl overflow-hidden cursor-pointer">
      <img alt="MovieCard" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
