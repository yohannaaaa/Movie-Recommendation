import React, { useEffect, useState } from 'react';
// import { Chip } from "@material-ui/core";

export const Genre = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=b29d04ec0a55cae1d636f5a70f64bedf');
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchGenres();

        // Cleanup function to reset genres state
        return () => {
            setGenres([]);
        };
    }, []);

    console.log(genres);

    return (
        <div>
            {/* Render genre information here
            {genres.map((genre) =>(
                
            ))} */}
        </div>
    );
};
