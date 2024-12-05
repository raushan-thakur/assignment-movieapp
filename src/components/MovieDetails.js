import React from "react";
import { IMG_CDN } from "../utils/constants";
import { useParams } from "react-router-dom";
import MovieContent from "./MovieContent";
import Layout from "../Layout/Layout";
import Cast from "./Cast";
import useFetch from "../hooks/useFetch";

const MovieDetails = () => {
  const { id } = useParams();

  // Fetch movie credits using useFetch
  const { data: castData, loading: castLoading, error: castError } = useFetch(
    `/movie/${id}/credits`
  );

  // Fetch movie details using useFetch
  const { data: movieData, loading: movieLoading, error: movieError } = useFetch(
    `/movie/${id}`
  );

  // Handle errors or loading states
  if (movieLoading || castLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen text-white">
          <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-12 h-12"></span>
          <span className="ml-4">Loading movie details...</span>
        </div>
      </Layout>
    );
  }

  if (movieError || castError) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen text-red-500">
          <p>Failed to fetch movie details. Please try again later.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full">
        <div className="h-[100vh] w-[100vw] top-0 absolute -z-10 overflow-hidden bg-[radial-gradient(circle,_rgba(0,0,0,1)_0%,_rgba(54,19,108,1)_100%)]">
          <img
            className="w-12/12 h-screen object-cover md:w-screen mx-auto fixed brightness-[.4] scale-125 xl:scale-105 "
            src={
              IMG_CDN +
              (movieData?.backdrop_path || movieData?.belongs_to_collection?.backdrop_path)
            }
            alt="Movie Background"
          />
        </div>
        <MovieContent info={movieData} />
        <Cast data={castData?.cast} loading={castLoading} />
      </div>
    </Layout>
  );
};

export default MovieDetails;
