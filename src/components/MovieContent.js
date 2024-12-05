import React, { useState } from "react";
import { IMG_CDN } from "../utils/constants";
import VideoPopup from "./VideoPopup";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const labelCSS = "font-semibold text-white text-sm lg:text-base";
const valueCSS =
  "px-4 py-2 m-1 text-white bg-black opacity-70 rounded-full border border-black";

const MovieContent = ({ info }) => {
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const {
    data: trailerData,
    loading: isLoading,
    error,
  } = useFetch(`/movie/${id}/videos?language=en-US`);

  const videoId =
    trailerData?.results?.find((movie) => movie.type === "Trailer")?.key ||
    trailerData?.results?.[0]?.key ||
    null;

  const handleVideoPlay = () => {
    if (videoId) {
      setShow(true);
    } else {
      alert("Trailer not available");
      console.error("Trailer not available");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-between pt-20 px-4 lg:pt-16 lg:px-20 w-full">
      <div className="w-6/12 md:w-3/12 mt-0 md:mt-0">
        <img
          className="w-full rounded-2xl"
          src={IMG_CDN + info?.poster_path}
          alt="movie poster"
        />
      </div>
      <div className="flex flex-col w-8/12">
        <div className="text-white">
          <h1 className="text-4xl lg:text-6xl font-extrabold">
            {info?.title || info?.original_name}
          </h1>
          <span className="text-lg lg:text-xl pl-2 font-normal">
            (
            {info?.release_date?.slice(0, 4) ||
              info?.first_air_date?.slice(0, 4)}
            )
          </span>
        </div>
        <div className="flex flex-wrap gap-4 mt-6 text-white">
          {info?.release_date && (
            <div>
              <span className={labelCSS}>Date:</span>
              <span className={valueCSS}>{info?.release_date}</span>
            </div>
          )}
          <div>
            <span className={labelCSS}>Genre:</span>
            {info?.genres?.map((gen) => (
              <span key={gen?.id} className={valueCSS}>
                {gen?.name}
              </span>
            ))}
          </div>
          {info?.runtime && (
            <div>
              <span className={labelCSS}>Runtime:</span>
              <span className={valueCSS}>
                {Math.floor(info?.runtime / 60)} Hrs
              </span>
            </div>
          )}
        </div>
        <div className="mt-6">
          <button
            className="  bg-white text-black p-2 px-10 text-xl bg-opacity-80 rounded-lg mx-2"
            onClick={handleVideoPlay}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Play"}
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-lg lg:text-xl font-semibold text-white">
            Overview:
          </h2>
          <p className="text-sm lg:text-lg text-white mt-2 overflow-hidden">
            {info?.overview}
          </p>
        </div>
      </div>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={() => {}}
      />
    </div>
  );
};

export default MovieContent;
