const store = require("./redux/store.js");
const movies = require("./redux/movies");
const tvShows = require("./redux/tvShows");

//ADD MOVIE
store.dispatch(movies.addMovie("Home Alone"));
store.dispatch(movies.addMovie("Over the moon"));
store.dispatch(movies.addMovie("Soul"));
store.dispatch(movies.addMovie("The Wolf"));

//ADD TV SHOW
store.dispatch(tvShows.addTvShow("Full House"));
store.dispatch(tvShows.addTvShow("Shake it up"));
store.dispatch(tvShows.addTvShow("Men In Black"));
store.dispatch(tvShows.addTvShow("Saved By the Bell"))

//REMOVE MOVIE
store.dispatch(movies.removeMovie("Over the moon"));
store.dispatch(movies.removeMovie("The Wolf"));

//REMOVE TV SHOW
store.dispatch(tvShows.removeTvShow("Men in Black"));

//GET ALL MOVIES
store.dispatch(movies.getAllMovies());

//GET ALL TV SHOWS
store.dispatch(tvShows.getAllTvShows());
