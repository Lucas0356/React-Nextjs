// import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
    const {filters} = useFilters()
    // const {cart} = useCart()

    return (
        <footer className='footer'>
            <h4>Shopping Cart con useContext & useReducer</h4>
            { JSON.stringify(filters,null,2) }
            {/* { JSON.stringify(cart,null,2) } */}
        </footer>
    )
}