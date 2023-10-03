import './App.css'
// Componentes
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Cart } from './components/Cart'

// Hooks
import { useState } from 'react'
import { CartProvider } from './context/cart'

// Custom Hooks
import { useFilters } from './hooks/useFilters'

// Otros
import { IS_DEVELOPMENT } from './config.js'
import {products as initialProducts} from './mocks/products.json'

function App() {

  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      { IS_DEVELOPMENT && <Footer /> }
    </CartProvider>
  )
}

export default App
