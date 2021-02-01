import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LoadPosts from './components/LoadPost';

function App() {

  return (
      <div className = "App">
          <Header headLine = "Ugly Thing"/>
          <LoadPosts/>
          <Footer/>
      </div>    
  );
}

export default App;