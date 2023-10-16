import Gif from '../components/Gif'
import styles from '../styles/ListOfGifs.module.css'

export function ListOfGifs({ gifs }) {
    return (
        <ul className={styles["gifs-container"]}>
            {
                gifs && gifs.map((gif) => (
                    <li>
                        <Gif gif={gif} key={gif.id} />
                    </li>
                ))
            }
        </ul>
    )
}

export function NoGifsResults() {
    return (
        <p>
            No se encontraron gifs para esta búsqueda
        </p>
    )
}

export function Gifs({ gifs }) {
    const hasGifs = gifs?.length > 0

    return (
        hasGifs
            ? <ListOfGifs gifs={gifs} />
            : <NoGifsResults />
    )
}