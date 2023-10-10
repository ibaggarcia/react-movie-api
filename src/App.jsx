import { useState, useCallback } from 'react'
import './App.css'

import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import debounce from 'just-debounce-it'

function App() {

  const [search, setSearch] = useState('')
  const { moviesList, error } = useMovies({ search })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      setSearch(search)
    }, 500)
    , []
  )

  const handleSubmit = (event) => {
    event.preventDefault()

    setSearch(event.target.search.value)
  }

  const handleChange = (event) => {
    debouncedGetMovies(event.target.value)
  }
  
  return (
    <>
    <header>
      <form className='formMovies' onSubmit={handleSubmit}>
        <h1>Buscador de películas</h1>
        <input type="text" 
          placeholder='Star wars, Marvel, Lego, Mision Imposible...' 
          name='search'
          onChange={handleChange}
          required/>
        <button>Buscar</button>
      </form>
    </header>
    <main>
      <Movies moviesList={moviesList} error={error}/>
    </main>
    </>
  )
}

export default App
