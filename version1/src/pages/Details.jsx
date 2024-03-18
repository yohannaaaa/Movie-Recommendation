import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {Detail} from  '../components/Detail'



export const Details = () => {
    const { index } = useParams();
    const movieindex = parseInt(index);


    const [movie, setMovie] = useState({});

    useEffect(() => {
    
    const url = `https://api.themoviedb.org/3/movie/${movieindex}?api_key=042aa4748de2bd655dc1224d9e6c6baa`;

    fetch(url)
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
    }, []); 

    //console.log(movie);
  return (
    <div>
        <Detail data={movie} />
    </div>
  )
}