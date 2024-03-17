import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {Detail} from  '../components/Detail'



export const Details = () => {
    const { index } = useParams();
    const movieindex = parseInt(index);


    const [moviesList, setMovieList] = useState([])

    const getMovie = () => {
      
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=b29d04ec0a55cae1d636f5a70f64bedf")
      //`https://api.themoviedb.org/3/movie/${movieId}`
      .then(res => res.json())
      .then(json => setMovieList(json.results))
    
    }
    
    useEffect(() =>{
      try{
      getMovie()
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    },[])
    
    console.log(moviesList)

    

 // Check if movie is undefined or empty
 if (!moviesList || moviesList.length === 0) {
    return <div>No movie data available.</div>;
  }
      // Find the movie with the matching ID
  let selectedMovie;

  for(let i = 0; i < moviesList.length; i++){
    if(moviesList[i].id == movieindex) selectedMovie  = moviesList[i];
  }


  return (
    <div>
        <Detail data={selectedMovie } />
    </div>
  )
}



















// import { Detail } from "../components/Detail"
// import React,  { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// export const Details = ({data}) => {
//   //  const {imdbID } = useParams();
//     //const ImdbID = parseInt(imdbID);

//     const [movies, setMovies] = useState([]);
//     // const [detdata, setdata] = useState('');
//     // getdata=da
//     const getMovieRequest = async (data1) => {
//       const url = `http://www.omdbapi.com/?i=${data1}&apikey=13c8922f`;
    
//       const response = await fetch(url);
//       const responseJson = await response.json();
    
//       if(responseJson.Search){
//       setMovies(responseJson.Search);
//     }
//     else {<p>Movie not found</p>}
//     };
    
//     useEffect(() => {
//       getMovieRequest(data);
//     }, [data]);
    
//   return (
    
//     <>
//             <Detail info={movies}/> 
//         </>
//   )
// }

 