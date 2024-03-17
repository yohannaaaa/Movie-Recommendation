import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
/*
const SearchBox = (props) => {
    return(
        <div className='search  flex justify-between px-5 py-2 bg-gray-100 rounded'>
            <input
             className='bg-transparent outline-0' 
             value ={props.value}
             onChange={(event) => props.setSearchValue(event.target.value)}
             placeholder='Type to search'></input>
            <button  ><CiSearch/></button>
          </div>
        
    )
}

export default SearchBox;
 */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation on search

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (searchTerm) {
      const apiKey = '042aa4748de2bd655dc1224d9e6c6baa'; // Replace with your TMDb API key
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
      const response = await fetch(url);
      const json = await response.json();
      setSearchResults(json.results);
    }
  };

  const handleMovieSelect = (movieId) => {
    navigate(`/details/${movieId}`); 
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a movie..."
        />
        <button type="submit"><CiSearch/></button>
      </form>
      {searchResults.length > 0 && (
        <ul className="relative -translate-x-2/4 z-[100] left-2/4 top-2.5; h-[8rem] overflow-y-scroll ">
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <Link to={`/details/${movie.id}`} onClick={() => window.location.load(`/details/${movie.id}`)}>
                {
                    movie.title
                }
                {
                    " - "
                }
                {
                    movie.release_date
                }
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
