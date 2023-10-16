import { useState } from 'react'

function useSearch() {
    // Estados
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)

    const handleChange = (event) => {
        // Guardamos el newQuery
        const newSearch = event.target.value

        // Prevalidación
        if (newSearch.startsWith(' ')) return
        updateSearch(newSearch)

        if (newSearch === '') {
            setError('No se puede buscar un gif vacío')
            return
        }
        if (newSearch.length < 3) {
            setError('La búsqueda debe tener al menos 3 caracteres')
            return
        }

        setError(null)
    }
    return { search, updateSearch, error, handleChange }
}

export default function Searchbar() {

    return (

    )
}
