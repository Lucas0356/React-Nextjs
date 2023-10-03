import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState } from 'react'

function useSearch(){
    // Estados
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)

    const handleChange = (event) => {
      // Guardamos el newQuery
      const newSearch = event.target.value
  
      // Prevalidación
      if (newSearch.startsWith(' ')) return
      updateSearch(newSearch)
  
      if (newSearch === ''){
        setError('No se puede buscar una película vacía')
        return
      }
      if (newSearch.length < 3){
        setError('La búsqueda debe tener al menos 3 caracteres')
        return
      }
  
      setError(null)
    }
    return { search, updateSearch, error, handleChange }
}

function App() {
  const [sort, setSort] = useState(false)

  const handleSort = () => {
    setSort(!sort)
  }

  // Custom hooks
  const { search, error, handleChange } = useSearch()
  const { movies, getMovies, loading } = useMovies( search, sort )

  const handleSubmit = (event) => {
    event.preventDefault()
    // Si tuvieramos más inputs podríamos usar lo siguiente:
    // const { query } = Object.fromEntries(new window.FormData(event.target)
    // const fields = new window.FormData(event.target)
    // const query = fields.get('query')
    getMovies(search)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input
            style={{boxShadow: error? '0 0 5px rgb(146, 8, 8)' : null}}
            name='search' value={search} onChange={handleChange}
            placeholder='Star Wars, Spiderman, The Avengers...'>
            </input>
            <input type='checkbox' onChange={handleSort} checked={sort} />
          <button>Buscar</button>
        </form>
        {error && <p className='error'>{error}*</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={ movies }/>
        }        
      </main>
    </div>
  )
}

export default App
