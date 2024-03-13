import React from "react";
import Header from '../component/Header'

//const sample = {Tittle: "tittle", year:"2023", time: "1h 43min", pg: 13,  Rating: 8.8, poster: poster , details: "Buried in the past lies a powerful truth that could change the future of the wizarding world. Albus Dumbledore, entrusted with a perilous mission, assembles a fearless team led by Newt Scamander, the brilliant magizoologist. Their odyssey takes them into the teeming heart of Gellert Grindelwald's dark army, where they must confront not only formidable foes but also long-held secrets that threaten to tear them apart. Love, loyalty, and the fate of the wizarding world itself hang in the balance in this epic adventure."}

import './Details.css'
export default function Details({move}){
    return(
        <>
            <Header/>
            <div>
                <div className='topBox'>
                <div className='movieTilte'>
                    <h2>{move.Tittle}</h2>
                    <div className='movieDescrption1'>
                        <p className='movieDes'>{move.year}</p>
                        <p className='movieDes'>{move.pg}</p>
                        <p className='movieDes'>{movie.time}</p>
                    </div>
                </div>
                <div className='rating'>
                    Rating {move.Rating} ⭐️
                </div>
                </div>
                <div className='movieDescription'>
                <img src = {move.poster} className='poster'></img>
                <p>
                    {move.details}
                </p>
                </div>
            </div>
        </>
    )
}