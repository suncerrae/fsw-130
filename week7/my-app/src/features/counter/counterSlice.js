import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    movies: []
  },
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    addMovietitle: (state, action) => {
      state.movies += action.payload;
    },
    addMovieGenre: state => {
      state.movies = [...state.movies]
      
    },
    addMovieYear: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    addMovieUrl: (state, action) => {
      state.movies += action.payload;
    },
    addMovieActors: state => {
      state.movies = [...state.movies]
  },
  }
}
);

export const { addMovie, addMovieGenre, addMovieActors,addMovietitle,addMovieYear,addMovieUrl } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const deletemovie = movie => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(movie));
//   });
// };
//contact = contact.filter((item, index) => index !== action.payload)
export const deleteMovie = (movie, index) => dispatch => {
  addMovietitle.filter((movie, index) => index !== addMovietitle)
}


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMovies = state => state.counter.movies;

export default counterSlice.reducer;