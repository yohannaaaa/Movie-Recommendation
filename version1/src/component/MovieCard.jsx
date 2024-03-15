import React from "react";
import './MovieCard.css';

export default function MovieCard({movie}){
    //const sample = {title: "The zone of Interest", release_date:"2023", time: "1h 43min", age: "PG13", genre_ids:[22, 108, 12], vote_average: 8.8, poster_path: poster , overview: "Buried in the past lies a powerful truth that could change the future of the wizarding world. Albus Dumbledore, entrusted with a perilous mission, assembles a fearless team led by Newt Scamander, the brilliant magizoologist. Their odyssey takes them into the teeming heart of Gellert Grindelwald's dark army, where they must confront not only formidable foes but also long-held secrets that threaten to tear them apart. Love, loyalty, and the fate of the wizarding world itself hang in the balance in this epic adventure."}
    return(
        <div className="moveCard">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="imagePoster"></img>
            <div className="Rating">⭐️ {movie.vote_average}</div>
            <div className="tittle">{movie.title}</div>
            <button className="add2WatchList">ADD TO WATCH LIST</button>
        </div>
    )
}