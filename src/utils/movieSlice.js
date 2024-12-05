import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name : 'movies',
    initialState : { 
        movieResults : [],
    },
    reducers : {
        addMovieResult : (state, action) => {
            const { movieResults} = action.payload;
            state.movieResults = movieResults;
        }
    },
})

export const { addMovieResult } = movieSlice.actions;
export default movieSlice.reducer;