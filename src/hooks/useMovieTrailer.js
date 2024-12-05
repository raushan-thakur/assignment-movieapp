
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
   
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
