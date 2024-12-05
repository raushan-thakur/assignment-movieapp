import React from "react";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SearchResults = () => {
  const { movieResults, loading, error } = useSelector((store) => store.movies);

  if (loading) {
    return (
      <Layout title={"Movie-SearchPage"}>
        <div className="flex justify-center items-center h-screen text-white">
          <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-12 h-12"></span>
          <span className="ml-4">Loading results...</span>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title={"Movie-SearchPage"}>
        <div className="flex justify-center items-center h-screen text-red-500">
          <p>Something went wrong: {error}</p>
        </div>
      </Layout>
    );
  }

  if (!movieResults || movieResults.length === 0) {
    return (
      <Layout title={"Movie-SearchPage"}>
        <div className="flex justify-center items-center h-screen bg-[radial-gradient(circle,_rgba(0,0,0,1)_0%,_rgba(54,19,108,1)_100%)] text-white">
          <p>No movies found. Try searching for something else.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={"Movie-SearchPage"}>
      <div className="p-6 flex justify-around bg-[radial-gradient(circle,_rgba(0,0,0,1)_0%,_rgba(54,19,108,1)_100%)] text-white bg-opacity-70">
        <div className="flex flex-wrap gap-2 justify-center">
          {movieResults.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
