import React from "react";
import './movie-list.css';
import {MovieContextConsumer} from "../provider/movieContext";

const MovieList = () => {
    
    return(
        <MovieContextConsumer>
        {movie => (
            <div>
                {movie.movies.map((allMovies, id) => {
                    return (
                        <div key={id} >
                            <h3 className="title">{allMovies.title}</h3>
                            <h5 className="rated">Rated: {allMovies.rated}</h5>
                        </div>
                    )
                })}
            </div>
        )}
        </MovieContextConsumer>
    )

}

export default MovieList;