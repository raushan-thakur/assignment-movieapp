import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";

const appStore = configureStore({
  reducer: {
    movies : movieSlice,
  },
});

export default appStore;