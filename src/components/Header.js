import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addMovieResult } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import useFetch from "../hooks/useFetch";

const Header = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState("");
  const navigate = useNavigate();
  const [searchUrl, setSearchUrl] = useState("");
  const { data, loading, error } = useFetch(searchUrl);

  const handleSearchClick = () => {
    if (movie.trim().length < 1) return;
    setSearchUrl(`/search/movie?query=${movie}`);
  };

 useEffect(() => {
    if (data && data.results) {
      dispatch(addMovieResult({ movieResults: data.results }));
      navigate(`/search?=${movie}`);
    }
  }, [data, dispatch, movie, navigate]);

  return (
    <div className="flex text-center items-center justify-center text-white bg-[radial-gradient(circle,_rgba(0,0,0,1)_0%,_rgba(54,19,108,1)_100%)] p-2">
      <Link to={"/"} className="px-6 p-2 bg-[#166721] text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none flex items-center justify-center">Home</Link>
      <input
        type="text"
        className="p-2  m-4 w-96 rounded text-black"
        placeholder="Search for a movie..."
        onChange={(e) => setMovie(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") handleSearchClick();
        }}
      />
      <button
        onClick={handleSearchClick}
        className="px-6 p-2 bg-[#53239b] text-white rounded-lg hover:bg-violet-600 focus:ring-2 focus:ring-red-300 focus:outline-none flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 mr-2"></span>
        ) : (
          "Search"
        )}
        {error && <span className="text-red-500 text-sm ml-2">{error}</span>}
      </button>
    </div>
  );
};

export default Header;
