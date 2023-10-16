'use client'

import React from 'react';

// Importa componentes
import LikeButton from './LikeButton'

// Importa los estilos
import styles from '../styles/Post.module.css'

// Importa la etiqueta Link de Next.js para la navegación
import Link from 'next/link'

// Importa el custom hook con la lógica
import { usePostWithComments } from '../hooks/usePostWithComments';

export default function PostWithComments({ post, listOfComments=null }) {

    const { commentsVisibility, handleClick } = usePostWithComments()

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
            {listOfComments && listOfComments}
        </>
    )
}