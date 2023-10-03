import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App() {
    // Custom hooks
    const { fact, refreshCatFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    // Función botón para generar nueva cita e imagen
    const handleClick = async () => {
        refreshCatFact()
    }

    return (
        <main className="main-container">
            <h1>RANDOM CAT IMAGE GENERATOR</h1>
            <section className="content">
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt="Random Cat image" />}
            </section>
            <button className="button" onClick={handleClick}>
                New image
            </button>
        </main>
    )
}
