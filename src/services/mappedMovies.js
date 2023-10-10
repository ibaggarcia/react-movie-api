export const mappedMovies = ({ movies }) => {
    return movies?.Search.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        img: movie.Poster
    }))
}
    