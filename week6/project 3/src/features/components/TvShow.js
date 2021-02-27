import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTvShows, selectTvShows } from '../media/mediaSlice';


export function TvShow() {

  const tvShows = useSelector(selectTvShows);
  const dispatch = useDispatch();
  const [ newTvShow, addTvShow ] = useState('');

  const clearField = () => {
    addTvShow('');
  };

  const tvShowList = tvShows.map((tvshow, id) =>
    <li key={id}>{tvshow}</li>
  );

  return (
    <div>
      <div>
        <input
          type= "text" 
          aria-label="Enter Tv Show"
          placeholder="Enter Tv Show"
          value={newTvShow}
          onChange={e => addTvShow(e.target.value)}
        />
        <button
          aria-label="Add Tv Show"
          onClick={() => dispatch(addTvShows(newTvShow), clearField())}
        >
          Add Tv Show
        </button>
      </div>
      <div>
        <ul>
          <h2>{tvShowList}</h2>
        </ul>
      </div>
    </div>
  );
}