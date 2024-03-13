import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourites';

function App() {
const [movies, setMovies] = useState([]);
const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=13c8922f`;

  const response = await fetch(url);
  const responseJson = await response.json();

  if(responseJson.Search){
  setMovies(responseJson.Search);
}
};

useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue]);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading = 'Movies'/>
          <SearchBox searchValue = {searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
     <MovieList movies ={movies} favouriteComponent = {AddFavourite}/>
     </div>
    </div>
  )
}

export default App
