import React from "react";
import Header from '../component/Header'
import MovieCard from "../component/MovieCard";
import { useState, useEffect } from 'react';

import './Details.css'
export default function Details({move}){
    function genreArrayExtracter(){
        let array = new Array();
        if (move && move.genres) {
            for (let i=0; i< move.genres.length; i++){ array[i] = move.genres[i].id;}
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
    console.log(genreArrayExtracter())
    return(
        <>
            <Header/>
            <div className="detailsBody">
                <div className='topBox'>
                <div className='movieTilte'>
                    <h2>{move.title}</h2>
                    <div className='movieDescrption1'>
                        <p className='movieDes'>{move.release_date}</p>
                        <p className='movieDes'> {move.original_language}</p>
                        <p className='movieDes'>{move.runtime} min</p>
                    </div>
                </div>
                <div className='rating'>
                    Rating {move.vote_average} ⭐️
                </div>
                </div>
                <div className='movieDescription'>
                    <img src = {`https://image.tmdb.org/t/p/w500/${move.poster_path}`} className='poster'></img>
                    <div className="description">
                        <p>
                            {move.overview}
                        </p>
                        {(move.genres)&&(<div className="genure">
                            {
                                move.genres.map((gen)=>(<div className="gen">{gen.name}</div>))
                            }
                        </div>)}
                        <button className="add2List">ADD TO WATCH LIST</button>
                    </div>
                </div>
                <div className="recommendations">
                    <div className="moreLike">
                        <div className="decorations"></div>
                        <h2>More like this</h2>
                    </div>
                    <div className="sortBy">
                        <button className="sort">by Tittle</button>
                        <button className="sort">by Genre</button>
                        <button className="sort">by Actor</button>
                    </div>
                    {recommend.results && (<div className="recommended">
                        {
                            recommend.results.map((rec)=>(<MovieCard movie={rec}/>))
                        }
                    </div>)}
                </div>
            </div>
        </>
    )
}