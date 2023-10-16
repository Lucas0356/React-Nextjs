// Importamos componentes
import LikeButton from './LikeButton'

// Importamos los estilos
import styles from '../styles/Post.module.css'

export default function Gif({ gif }) {

    return (
        <article className={styles.post}>
            <img src={gif.url}/>
            <p>{gif.description}</p>
            <div className={styles['like-button-container']}>
            <LikeButton id={gif.id} type="post" />
            </div>
        </article>
    )
}