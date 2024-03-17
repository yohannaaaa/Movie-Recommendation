// MoviesHome.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Details } from '../pages/Details';
import { Genre } from '../components/Genre';

export const MoviesHome = () => {
  const [moviesList, setMovieList] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

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
    <div>
       <Genre type="movies" selectedGenres={selectedGenres}
                            setSelectedGenres={setSelectedGenres} 
                            genres={genres}
                            setGenres={setGenres} />
    <div className='grid m-3 grid-cols-4 '>
    {/* search by genre */}



      {moviesList.map((movie, index) => (
        <Link to={`/details/${movie.id} `} key={index}   >   
          <img className='p-5' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          {/* <Details  movieprop={moviesList}  /> */}
      {console.log(movie.id)}  
       </Link>
        
      ))} 
     
    </div>
    </div>
  );
 
};
