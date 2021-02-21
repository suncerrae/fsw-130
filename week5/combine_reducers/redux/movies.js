module.exports.addMovie = function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

module.exports.removeMovie = function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: movie
    }
}

module.exports.getAllMovies = function getAllMovies() {
    return {
        type: "GET_ALL_MOVIES"
    }
}

module.exports.moviesReducer = function moviesReducer(movies = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload]
        case "REMOVE_MOVIE": {            
            const updatedArr = movies.filter(movie => movie.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        case "GET_ALL_MOVIES":
            return movies
        default:
            return movies
    }
}