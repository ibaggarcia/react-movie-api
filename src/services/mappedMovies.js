export const mappedMovies = (resMovies) => {
    const mappedMovies = resMovies.Search.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return mappedMovies 
}