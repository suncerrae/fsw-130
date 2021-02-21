const store = require("./redux/store.js");
const movies = require("./redux/movies");
const tvShows = require("./redux/tvShows");

//ADD MOVIE
store.dispatch(movies.addMovie("Fight Club"));
store.dispatch(movies.addMovie("Red"));
store.dispatch(movies.addMovie("Push"));
store.dispatch(movies.addMovie("Bio-Dome"));

//ADD TV SHOW
store.dispatch(tvShows.addTvShow("The Good Witch"));
store.dispatch(tvShows.addTvShow("The Universe"));
store.dispatch(tvShows.addTvShow("Ancient Aliens"));
store.dispatch(tvShows.addTvShow("House"))

//REMOVE MOVIE
store.dispatch(movies.removeMovie("Fight Club"));
store.dispatch(movies.removeMovie("Push"));

//REMOVE TV SHOW
store.dispatch(tvShows.removeTvShow("The universe"));

//GET ALL MOVIES
store.dispatch(movies.getAllMovies());

//GET ALL TV SHOWS
store.dispatch(tvShows.getAllTvShows());
