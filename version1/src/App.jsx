import { useState, useEffect } from 'react';
import './App.css';
import Details from './Page/Details';
import poster from './assets/EC90BB58-EF5A-4D8C-AB28-87A69B387869.jpeg';

function App() {
  const [movieTitle, setMovieTitle] = useState({});

  useEffect(() => {
    const movieId = 123;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=042aa4748de2bd655dc1224d9e6c6baa`;

    fetch(url)
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(data => {
        setMovieTitle(data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, []); 

  return (
    <>
      {movieTitle && <Details move={movieTitle} />}
    </>
  );
}

export default App;
