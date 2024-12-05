export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
  };
  export const IMG_CDN = "https://image.tmdb.org/t/p/original/"; 

  export const BASE_URL = "https://api.themoviedb.org/3";