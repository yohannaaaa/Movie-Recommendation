export default function SearchResults({input}){
    return(
        <div>
            {input.length > 0 && (
                <ul className="search-results">
                {input.map((movie) => (
                    <li key={movie.id}>
                    <button onClick={() => handleMovieSelect(movie.id)}>
                        {movie.title}
                    </button>
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}