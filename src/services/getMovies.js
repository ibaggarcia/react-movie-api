const API_OMDB_ENDPOINT = 'https://www.omdbapi.com/'
const API_KEY = '4287ad07'

export const getMovies = async ({ search }) => {
    
    if(search === '') return
    
    const res = await fetch(`${API_OMDB_ENDPOINT}?apikey=${API_KEY}&s=${search}`)
    const data = await res.json()

    return data
  }