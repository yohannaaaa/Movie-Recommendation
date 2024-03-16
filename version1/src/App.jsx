import { useState, useEffect } from 'react';
import './App.css';
import Details from './Page/Details';
import poster from './assets/EC90BB58-EF5A-4D8C-AB28-87A69B387869.jpeg';

function App() {
  const movieId = 866;
  return (
    <>
      {<Details movieId={movieId} />}
    </>
  );
}

export default App;
