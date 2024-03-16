import React, { useState } from 'react'
import MovieListHeading from './MovieListHeading';


const Favourite = (props) => {
    const handleButtonClick = () => {
        // Handle button click logic here
        console.log('Button clicked');
    
    };

    const [favourites, setFavourites] = useState([]);
    return (
        <div className='col'>
            
        <button onClick={handleButtonClick}>Favourites</button>
         
    </div>
  );
}

export default Favourite;
