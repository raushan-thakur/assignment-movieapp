import React from "react";
import { IMG_CDN } from "../utils/constants";
import { Link } from "react-router-dom";
import fallbackImage from "../assets/fallback-image.jpg"; 

const MovieCard = ({ data }) => {
  if (!data) return null;

  const imageSrc = data.poster_path ? IMG_CDN + data.poster_path : fallbackImage;
  const movieTitle = data.title || data.name || "Untitled";

  return (
    <Link to={`/movie/${data.id}`}>
      <div className="m-2 mb-6 w-56 h-96 flex flex-col">
        <img
          className="w-[100%] h-[100%] bg-violet-200 mb-2 rounded-2xl"
          alt={`${movieTitle} Poster`}
          src={imageSrc}
          onError={(e) => (e.target.src = fallbackImage)} 
        />
        <span className="text-center">{movieTitle}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
