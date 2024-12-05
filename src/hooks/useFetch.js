import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./apiData";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
