import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies( search, sort ) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async (search) => {
    // Evitar dos búsquedas iguales seguidas
    if (search === previousSearch.current) return

    try{
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies(search)
      setMovies(newMovies)
      console.log('se ha guardado')
    } catch (e){
      setError(e.message)
    } finally{
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) // locale.Compare compara con los acentos
    : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, error }
}