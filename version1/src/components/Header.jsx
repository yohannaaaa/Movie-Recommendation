import React from 'react';
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import {Link}  from 'react-router-dom'
import { IoHeartOutline } from 'react-icons/io5';

import SearchBox from '../components/SearchBox';
import AddFavourite from '../components/AddFavourites';
import MovieList from '../components/MovieList';

 

const Header = () => {
    const [moviess, setMovies] = useState([]);
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
        <>
        <div className='mt-0 p-3 flex justify-between items-center'>
                <h1 className='px-10 font-extrabold text-xl'>TeamTen </h1>
            <div className=' mt-0 flex-1 '>
                <div className='mt-0 px-10'>
                      <SearchBox searchValue = {searchValue} setSearchValue={setSearchValue}/>
                </div> 
            </div>

            <ul className='flex justify-between '>
                   <li className='px-10 font-bold hover:text-gray-300' >
                       <NavLink to='/' > Home</NavLink>
                 </li>

                 <li className='px-10 font-bold hover:text-gray-300' >
                       <NavLink to='/Signin' >Signin</NavLink>
                 </li>

                 <li className='px-10 font-bold hover:text-gray-300' >
                       <NavLink to='/Signout' >SignOut</NavLink>
                 </li>

                 <li className='px-10 font-bold hover:text-gray-300' >
                       <NavLink to='/Fav' > <IoHeartOutline/>  </NavLink>
                 </li>
            </ul>
        </div>

         <div className='row'>
         <Link to={`/Details/${moviess.imdbID}`}> 
         <MovieList movies ={moviess} favouriteComponent = {AddFavourite}/>
         
         </Link> 
        
        
      </div>
      </>
    )
}
export default Header;