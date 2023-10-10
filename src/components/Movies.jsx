function HasMovies({ movies }) {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title.length > 30 ? movie.title.slice(0, 27) + '...' : movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.img} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

function HasError({ error }) {
    return (
        error ? (<h1>{error}</h1>)
              : (<h1>Bienvenido! Realiza una búsqueda</h1>)
    )
}

export function Movies({ moviesList, error }) {
    return(
        moviesList ? (<HasMovies movies={moviesList}/>)
                   : (<HasError error={error}/>)
    )
}