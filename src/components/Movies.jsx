function ListOfMovies({ movies }) {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }    
        </ul>
    )
}

function NoResultsOrError({ movies }) {
    return movies.Error
        ? (<h1>{movies.Error}</h1>)
        : (<h1>Bienvenido, haz una búsqueda!</h1>)
}

export function Movies({ movies }) {
    const hasMovies = movies.length > 0 

    return hasMovies
        ? (<ListOfMovies movies={movies}/>)
        : (<NoResultsOrError movies={movies}/>)  
}