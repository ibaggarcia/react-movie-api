import { useState, useEffect } from "react"
import { searchMovies } from "../services/searchMovies"

export function useGetMovies({ search }) {
    const [movies, setMovies] = useState('')
  
    useEffect(() => {
      if(search == '') return
  
      const searchMovie = search
      searchMovies(searchMovie)
        .then(res => setMovies(res))
    }, [search])
  
    return { movies }
  }