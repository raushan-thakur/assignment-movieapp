import { API_OPTIONS, BASE_URL } from "../utils/constants";

export const fetchDataFromApi = async (url) => {
  try {
    const result = await fetch(`${BASE_URL}${url}`, API_OPTIONS);
    const json = await result.json();
    return json;
  } catch (err) {
    console.error(err);
    return err;
  }
};
