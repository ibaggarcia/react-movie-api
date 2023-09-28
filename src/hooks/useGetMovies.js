import { useState, useEffect } from "react"
import { searchMovies } from "../services/searchMovies"
import { mappedMovies } from '../services/mappedMovies'

export function useGetMovies({ search }) {
    const [movies, setMovies] = useState('')

    useEffect(() => {
      if(search == '') return
  
      const searchMovie = search
      searchMovies(searchMovie)
        .then(res => {
            if(res.Search) {
                const listOfMovies = mappedMovies(res)
                setMovies(listOfMovies)
            } else {
                setMovies(res)
            }    
        })
    }, [search])
  
    return { movies }
  }