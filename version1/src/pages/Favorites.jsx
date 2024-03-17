import Header from "../components/Header"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Favorites(){
    const [favourites, setFavourites] = useState([]);
    useEffect(() => {
        // Load data from local storage on component mount
        const storedData = JSON.parse(localStorage.getItem('react-movie-app-favourites')) || [];
        setFavourites(storedData);
      }, []);
    
      const handleDelete = (index) => {
        // Remove the item at the specified index from local storage
        const updatedData = [...favourites];
        updatedData.splice(index, 1);
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(updatedData));
        setFavourites(updatedData);
      };

    return(
        <>
            {
                    (favourites) && (<nav className="grid m-3 grid-cols-4 ">{
                        favourites.map((movie, index) => (
                            <div className="flex-col justify-center items-center text-center">
                                <Link to={`/details/${movie.id}`} key={index} className="p-1" onClick={() => window.location.load(`/details/${movie.id}`)}>
                                    <img className="w-[15rem] p-1" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                </Link>
                                <button onClick={()=>{handleDelete(index)}} className="background: red">Delete</button>
                            </div>
                            ))
                        } 
                        </nav>
                    )
            }
        </>
    )
}