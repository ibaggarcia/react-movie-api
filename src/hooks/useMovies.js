import { useState, useEffect } from "react"
import { getMovies } from '../services/getMovies.js'
import { ERRORS } from '../services/Errors.js'
import { mappedMovies } from "../services/mappedMovies.js"

export function useMovies({ search }) {
    const [moviesList, setMoviesList] = useState()
    const [error, setError] = useState('')

    useEffect(() => {
        
        getMovies({ search }).then(data => {
            if(data?.Search) {
                const movies = mappedMovies({ movies: data }) 
                setMoviesList(movies)
            } else {
                    setMoviesList()
                    setError(ERRORS[data?.Error || 'default'])
                }
        })

    }, [search])
  
    return { moviesList, error }
  }