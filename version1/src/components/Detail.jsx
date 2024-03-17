import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Detail = (props) => {
  const {vote_average,id, poster_path, title, overview,original_language
    , release_date, genres} = props.data;
  
  //console.log(props.data);
  //const recommendationList = movieRecom();
  //console.log(recommendationList.results);
  // Render movie details

function genreArrayExtracter(){
    let array = new Array();
    if (genres) {
        for (let i=0; i< genres.length; i++){ array[i] = genres[i].id;}
    }
    return array;
}
function recommendationQureyCreator(array){
    let returnValue = 'https://api.themoviedb.org/3/discover/movie?api_key=042aa4748de2bd655dc1224d9e6c6baa&with_genres=';
    for(let i=0; i<array.length; i++){
        if(i>0) returnValue += ",";
        returnValue += array[i]
    }
    return returnValue;
}

function recommendations(url){
    const [recReturn, setRecReturn] = useState([]);
    fetch(url)
    .then(response => response.json())
    .then(json => setRecReturn(json))
    .catch(err => console.error('error:' + err));
    return recReturn;
}

const recommend = recommendations(recommendationQureyCreator(genreArrayExtracter()));

  return (
    <>
    <div className='containerd flex m-5 ml-20 '  >
      <div className='imaged h-[300px] w-[300px] p-3'>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      </div>
      <div className='imgInfod p-5 h-[400px] w-[800px]  text-white'>
        <h1 className="mb-10 text-3xl font-bold">{title}</h1>
       <p>{release_date} <span className="px-4">{original_language}</span> </p>  
        <p>{overview}</p>
        {(genres)&&(<div className="inline-flex gap-4 justify-between m-5">
          {
            genres.map((gen, index)=>(
              <div className="p-2 rounded-2xl border-solid border-[0.01rem] text-[0.8rem] border-[black] h-10 overflow-hidden overflow-wrap-none" key={index}>{gen.name}</div>
            ))   
          }
          <div className="p-2 rounded-2xl border-solid border-[0.01rem] text-[0.8rem] border-[black]" > {vote_average} ⭐️</div>
</div>)}
 <div>
        <button className=" ml-4 p-2 bg-red-600 rounded-2xl border-[black]">Add To Favorites 🤍</button>
        </div>



      </div>
    </div>
    <div className="m-5 ml-20">
      <h2 className="mb-10  text-white mt-20 text-3xl font-bold pl-3 border-solid border-[0rem_0rem_0rem_1rem] border-[black] text-[2rem] " >Similar movies</h2>
    {
      (recommend.results) && (<nav className="grid m-3 grid-cols-4 ">{
        recommend.results.map((movie, index) => (
            (movie.id!=id)&&(
            <Link to={`/details/${movie.id}`} key={index} className="p-1">
              <img className="w-[15rem] p-1" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
            )
            ))
          } 
        </nav>
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
