// Importamos componentes
import LikeButton from './LikeButton'

// Importamos los estilos
import styles from '../styles/Post.module.css'

// Importa la etiqueta Link de Next.js para la navegación
import Link from 'next/link'

export default function Post({ post }) {
    return (
        <article className={styles.post}>
            <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                <h3 className='title'>{post.title}</h3>
                <p className={styles.body}>{post.body}</p>
            </Link>
            <div className={styles['like-button-container']}>
            <LikeButton id={post.id} type="post" />
            </div>
        </article>
    )
}