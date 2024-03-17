import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export const Detail = (props) => {
  const {poster_path, title, overview,original_language
    , release_date, genre_ids} = props.data;
  
  function movieRecom(){
    if(genre_ids){
      let url = 'https://api.themoviedb.org/3/discover/movie?api_key=042aa4748de2bd655dc1224d9e6c6baa&with_genres=';
      for(let i = 0; i < genre_ids.length; i++){
        if(i>0) url+=",";
        else url += genre_ids[i];
      }
      const [recReturn, setRecReturn] = useState([]);
        fetch(url)
        .then(response => response.json())
        .then(json => setRecReturn(json))
        .catch(err => console.error('error:' + err));
        return recReturn;
    }
  }

  //console.log(movieRecom());
  const recommendationList = movieRecom();
  console.log(recommendationList.results);
  // Render movie details

  function genreConverter(input){
    switch(input){
      case 28:
        return "Action";
        break;
      case 12:
        return "Adventure";
        break;
      case 16:
        return "Animation";
        break;
    case 35:
        return "Comedy";
        break;
      case 80:
        return "Crime";
        break;
      case 99:
        return "Documentary";
        break;
      case 18:
        return "Drama";
        break;
      case 10751:
        return "Family";
        break;
      case 14:
        return "Fantasy";
        break;
      case 36:
        return "History";
        break;
      case 27:
        return "Horror";
        break;
      case 10402:
        return "Music";
        break;
      case 9648:
        return "Mystery";
        break;
      case 10749:
        return "Romance";
        break;
      case 878:
        return "Science Fiction";
        break;
      case 10770:
        return "TV Movie";
        break;
      case 53:
        return "Thriller";
        break;
      case 10752:
        return "War";
        break;
      case 37:
        return "Western";
        break;
    }
  }

  return (
    <>
    <div className='container flex m-5 ml-20 '  >
      <div className='image h-[300px] w-[300px] p-3'>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      </div>
      <div className='imgInfo p-5 h-[400px] w-[800px]'>
        <h1 className="mb-10 text-3xl font-bold">{title}</h1>
       <p>{release_date} </p>  
       <p>{original_language} </p> 
        <p>{overview}</p>
        {(genre_ids)&&(<div className="inline-flex gap-4 justify-between">
          {
            genre_ids.map((gen, index)=>(
              <div className="p-2 rounded-2xl border-solid border-[0.1rem] border-[black]" key={index}>{genreConverter(gen)}</div>
            ))   
          }
        </div>)}
      </div>
    </div>
    <div className="m-5 ml-20">
      <h2 className="mb-10 text-3xl font-bold pl-3 border-solid border-[0rem_0rem_0rem_1rem] border-[black]" >Similar movies</h2>
    {
      (recommendationList.results)&&(
        <div className=''>
          {recommendationList.results.map((movie, index) => (
            <Link to={`/details/${movie.id} `} key={index}  className = "p-1" >   
              <img className="w-[15rem] p-1" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              {
                //console.log(movie.id)
              }  
            </Link>
            ))
          } 
        </div>
      )
    }
    </div>
    </>
  );
};











// import React, { useState, useEffect } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import AddFavourite from '../components/AddFavourites';


// export const Detail = ({info }) => {
//   // Check if data is defined before destructuring
//   if (!info) {
//       return <div>Loading...</div>;
//   }
//   const {Poster, title, description, price, imdbID} = info;
 
//   return (
//     <div>
//       <div className="container flex">
//         <div className="image">
     
//               <div className='image-container d-flex justify-content-start m-3'   key={imdbID}>
//                   <img src={Poster} alt="movie"></img>
//                   <div className="overlay d-flex align-items-center justify-content-center">
//                      <AddFavourite/>
//                   </div>
//               </div>
           
        
 
//         </div>

//         <div className="info">
           
//         </div>
//       </div>
//     </div>
//   );
// };






// // import React, { useState, useEffect } from 'react';
// // import { CiSearch } from 'react-icons/ci';

// // export const Detail = () => {
// //   const [movie, setMovie] = useState([]);
  
// //   useEffect(() => {
// //     const fetchMovie = async () => {
// //       const URL = "https://www.omdbapi.com/?i=tt3896198&apikey=daa63c56";
// //       const response = await fetch(URL);
// //       const finaldata = await response.json();
// //       setMovie(finaldata.Search || []); // Ensure 'finaldata.Search' is defined
// //       console.log(finaldata.Search);
// //     };
// //     fetchMovie();
// //   }, []); // Add empty dependency array to run effect only once
  
// //   return (
// //     <div>
// //       <div className="container flex">
// //         <div className="image">
// //           {  movie.map((val) => {
// //           return(  <>
// //             <img src={val.Poster} alt="image" />
// //             <p>{val.Title}</p>
// //             </>)
// // })}
// //         </div>

// //         <div className="info">
           
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };