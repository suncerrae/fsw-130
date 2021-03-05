import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Movie } from './features/components/movie';
import { TvShow } from './features/components/TvShow';
import { Navbar } from './features/components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Movie} />
        <Route path='/tvshows' component={TvShow} />
      </Switch>
    </div>
  );
}

export default App;