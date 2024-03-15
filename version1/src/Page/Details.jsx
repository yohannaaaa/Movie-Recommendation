import React from "react";
import Header from '../component/Header'
import MovieCard from "../component/MovieCard";
//const sample = {title: "The zone of Interest", release_date:"2023", time: "1h 43min", age: "PG13", genre_ids:[22, 108, 12], vote_average: 8.8, poster_path: poster , overview: "Buried in the past lies a powerful truth that could change the future of the wizarding world. Albus Dumbledore, entrusted with a perilous mission, assembles a fearless team led by Newt Scamander, the brilliant magizoologist. Their odyssey takes them into the teeming heart of Gellert Grindelwald's dark army, where they must confront not only formidable foes but also long-held secrets that threaten to tear them apart. Love, loyalty, and the fate of the wizarding world itself hang in the balance in this epic adventure."}

import './Details.css'
export default function Details({move}){
    const recommended = [move, move, move, move, move, move, move, move, move];
    return(
        <>
            <Header/>
            <div className="detailsBody">
                <div className='topBox'>
                <div className='movieTilte'>
                    <h2>{move.title}</h2>
                    <div className='movieDescrption1'>
                        <p className='movieDes'>{move.release_date}</p>
                        <p className='movieDes'>{move.age}</p>
                        <p className='movieDes'>{move.time}</p>
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
                        <div className="genure">
                            {
                               //move.genre_ids.map(genreId => (<div key={genreId} className="gen">{genreId}</div>))    
                            }
                            
                        </div>
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
                    <div className="recommended">
                        {
                            recommended.map((rec)=>(<MovieCard movie={rec}/>))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}