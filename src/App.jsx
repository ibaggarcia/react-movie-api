import { Movies } from './components/Movies'
import './App.css'

import { useGetMovies } from './hooks/useGetMovies'
import { useSearch } from './hooks/useSearch'


function App() {
  
  const { search, handleSearch } = useSearch()
  const { movies } = useGetMovies({ search })
  
  return (
    <>
      <header>
        <form className='formMovies' onSubmit={handleSearch}>
          <h1>Buscador de películas</h1>
          <input 
            type="text" 
            //value={search}
            name='search'
            placeholder='Marvel, Star Wars, Batman...' 
            //onChange={(e) => setSearch(e.target.value)}
            required/>
          <button>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </>
  )
}

export default App
