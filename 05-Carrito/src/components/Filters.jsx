import { useId} from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const { filters, setFilters } = useFilters()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        })
        )
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        })
        )
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio min</label>
                <input type="range"
                    id={minPriceFilterId}
                    min='0' 
                    max='1000' 
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}>
                </input>
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='home-decoration'>Decoración del hogar</option>
                    <option value='smartphones'>Celulares</option>
                    <option value='fragrances'>Fragancias</option>
                </select>
            </div>
        </section>
    )
}