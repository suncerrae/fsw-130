module.exports.addTvShow = function addTvShow(tvShow) {
    return {
        type: "ADD_TV_SHOW",
        payload: tvShow
    }
}

module.exports.removeTvShow = function removeTvShow(tvShow) {
    return {
        type: "REMOVE_TV_SHOW",
        payload: tvShow
    }
}

module.exports.getAllTvShows = function getAllTvShows() {
    return {
        type: "GET_ALL_TV_SHOWS"
    }
}

module.exports.tvShowReducer = function tvShowReducer(tvShows = [], action) {
    switch(action.type) {
        case "ADD_TV_SHOW":
            return [...tvShows, action.payload]
        case "REMOVE_TV_SHOW": {            
            const updatedArr = tvShows.filter(tvShow => tvShow.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        case "GET_ALL_TV_SHOWS": {
            return tvShows
        }
        default:
            return tvShows
    }
}