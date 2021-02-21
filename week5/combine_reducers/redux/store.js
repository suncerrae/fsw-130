// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const redux = require("redux");
const {combineReducers, createStore} = redux;
const { moviesReducer} = require("./movies");
const {tvShowReducer} = require("./tvShows");


const rootReducer = combineReducers
({
    movies: moviesReducer,
    tvShows: tvShowReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})


module.exports = store