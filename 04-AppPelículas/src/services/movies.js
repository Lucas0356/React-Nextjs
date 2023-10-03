const API_KEY = '4287ad07'

export const searchMovies = async (search) => {

    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search

        // Buena práctica mappear los resultados de la api, para no depender de ella
        return movies?.map( movie => ({
            title: movie.Title,
            id: movie.imdbID,
            year: movie.Year,
            image: movie.Poster
        }))
    } catch (e) {
        throw new Error('Hubo un error en la búsqueda de la película')
    }
}