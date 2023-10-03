import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
export function Products({ products }) {

    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }


    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title}></img>

                            <div>
                                <h3>{product.title} - ${product.price}</h3>
                            </div>

                            <div>
                                <button
                                    className={isProductInCart ? 'remove-button' : 'add-button'}
                                    onClick={() => {
                                        isProductInCart ? removeFromCart(product) : addToCart(product);
                                    }}>
                                    {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}