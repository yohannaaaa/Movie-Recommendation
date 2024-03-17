// MoviesHome.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Details } from '../pages/Details';

export const MoviesHome = () => {
  const [moviesList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=b29d04ec0a55cae1d636f5a70f64bedf")
      .then(res => res.json())
      .then(json => setMovieList(json.results))
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    getMovie();
  }, []);

// key={index}
  return (
    <div className='grid m-3 grid-cols-4 '>
      {moviesList.map((movie, index) => (
        <Link to={`/details/${index} `} key={index}   >   
<<<<<<< HEAD
          <img className='p-5' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : unavailable} alt={movie.title} />
=======
          <img className='p-5' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
>>>>>>> d2629ffec974de007849dded282cb713847fc8ec
          {/* <Details  movieprop={moviesList}  /> */}
      {console.log(index)}  
       </Link>
        
      ))} 
     
    </div>
  );
 
};
