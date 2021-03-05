import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovies, selectMovies } from '../media/mediaSlice';


export function Movie() {

  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const [ newMovie, addMovie ] = useState('');
  
  const clearField = () => {
    addMovie('');
  }

  const movieList = movies.map((movie, id) =>
    <li key={id}>{movie}</li>
  );

  return (
    <div>
        <div>
          <input
            type= "text"
            aria-label="Enter Movie"
            placeholder="Enter Movie"
            value={newMovie}
            onChange={e => addMovie(e.target.value)}
          />
          <button
            aria-label="Add Movie"
            onClick={() => dispatch(addMovies(newMovie), clearField())}
          >
            Add Movie
          </button>
        </div>
        <div>
          <ul>
            <h2>{movieList}</h2>
          </ul>
        </div>
    </div>
  );
}