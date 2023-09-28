const END_POINT_URL = 'http://www.omdbapi.com/'
const API_KEY = '4287ad07'

export const searchMovies = (search) => {
    return fetch(`${END_POINT_URL}?apikey=${API_KEY}&s=${search}`)
            .then(res => res.json())
            .then(data => data)
}