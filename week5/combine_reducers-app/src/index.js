const store = require("./redux/store.js");
const movies = require("./redux/movies");
const tvShows = require("./redux/tvShows");

//ADD MOVIE
store.dispatch(movies.addMovie("Fight Club"));
store.dispatch(addMovie("Red"));
store.dispatch(addMovie("Push"));
store.dispatch(addMovie("Bio-Dome"));

//ADD TV SHOW
store.dispatch(addTvShow("The Good Witch"));
store.dispatch(addTvShow("The Universe"));
store.dispatch(addTvShow("Ancient Aliens"));
store.dispatch(addTvShow("House"))

//REMOVE MOVIE
store.dispatch(removeMovie("Fight Club"));
store.dispatch(removeMovie("Push"));

//REMOVE TV SHOW
store.dispatch(removeTvShow("The universe"));

//GET ALL MOVIES
store.dispatch(getAllMovies());

//GET ALL TV SHOWS
store.dispatch(getAllTvShows());
