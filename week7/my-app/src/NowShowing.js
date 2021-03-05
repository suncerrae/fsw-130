import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import {  selectMovies, deleteMovie} from "./features/counter/counterSlice"

import Movie from './Movie'
// import Axios from 'axios'

function NowShowing(props) {
    const movies = useSelector(selectMovies);//this goes with the map.

    // const [nowShowing, setNowShowing] = useState([])

    // function getNowShowing() {
        // getting from redux
        // const movies = useSelector(selectMovies);//this goes with the map.
        // setNowShowing(movies)

        // getting by axios
        // Axios.get("/movies/search/nowShowing?nowShowing=true")
        //     .then(res => setNowShowing(res.data))
        //     .catch(err => console.log(err.response.data.errMsg))
    // }

    // useEffect(() => {
    //     getNowShowing()
    // }, [])

    const moviesNowShowing = movies.map(movie => 
        <Movie key={movie._id} title={movie.title} 
        img={movie.url} genre={movie.genre} 
        releaseYear={movie.releaseYear} 
        mainStars={movie.mainStars} _id={movie._id} 
        deleteMovie={deleteMovie}  addMovie={props.addMovie} 
        movies={props.movies} 
        // getMovies={getNowShowing}//not needed
    // editMovie={props.editMovie} //not made yet
    />)


    return (
        <div id="nowShowingPage">
            <h1 id="nowShowingTitle">Deals of the Month...</h1>
            {moviesNowShowing}
        </div>
    )
}

export default NowShowing