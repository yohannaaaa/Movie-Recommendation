export const Detail = (props) => {
  const {poster_path, title, overview,original_language
    , release_date, genre_ids} = props.data;

  
  // Render movie details
  return (
    <>
    <div className='container flex m-5 ml-20 '  >
      <div className='image h-[300px] w-[300px] p-3'>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      </div>
      <div className='imgInfo p-5 h-[800px] w-[800px]'>
        <h1 className="mb-10 text-3xl font-bold">{title}</h1>
       <p>{release_date} </p>  
       <p>{original_language} </p> 
        <p>{overview}</p>
      </div>
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
