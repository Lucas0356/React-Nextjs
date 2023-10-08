'use client'

// Importamos los hooks
import { useState } from 'react'

// Importamos componentes
import LikeButton from './LikeButton'

// Importamos los estilos
import styles from '../styles/Post.module.css'

// Importa la etiqueta Link de Next.js para la navegación
import Link from 'next/link'

export default function PostWithComments({ post, comments=null }) {
    // Estado de los comentarios
    const [commentsVisibility, setCommentsVisibility] = useState(false)

    const handleClick = () => {
        setCommentsVisibility(!commentsVisibility)
    }

    return (
        <>
        <article className={styles.post} key={post.id}>
            <h3 className={styles.title}>{post.title}</h3>
            <p>{post.body}</p>
            <div className={styles['buttons-container']}>
                <Link className={styles['comments-button']}
                    href={commentsVisibility ? `/posts/${post.id}` : `/posts/${post.id}/comments`}
                    onClick={handleClick}>
                    {commentsVisibility ? 'Hide comments' : 'Show comments'}
                </Link>
                <LikeButton id={post.id} type="post" />
            </div>
        </article>
        {comments}
        </>
    )
}