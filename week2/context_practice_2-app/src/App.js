import React from "react";
import Header from "./components/Header";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";

function App() {
  return (
    <div>
      <Header />
      <MovieForm />
      <MovieList />
    </div>
  )
}

export default App;