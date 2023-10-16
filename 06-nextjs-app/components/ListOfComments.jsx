'use client'

// Importamos los estilos
import styles from '../styles/ListOfComments.module.css'

// Importa el componente LikeButton
import LikeButton from './LikeButton'

// Importa la etiqueta Image de Next.js para mostrar imágenes
// import Image from 'next/image';

// Importa el custom hook con la lógica
import { useComments } from '@/hooks/useComments'

export default function ListOfComments({ postId }) {
  // Llamamos a nuestro custom hook
  const { comments } = useComments({postId})

  return (
    <div className={styles['comments-container']}>
      <div className={styles['comments-container-header']}>
        <h3>Comments</h3>
      </div>
      {comments && comments.map((comment) => (
        <article className={styles.comment} key={comment.id}>
          <div className={styles['user-info-content']}>
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.email}`}
              alt='user photo'
              width={50}
              height={50}
            />
            <h4 className={styles.email}>{comment.email}</h4>
          </div>
          <h5 className={styles['comment-title']}>{comment.name}</h5>
          <p className={styles['comment-body']}>{comment.body}</p>
          <div className={styles['like-button-container']}>
            <LikeButton id={comment.id} type="comment" />
          </div>
          <hr className={styles['comment-separator']}></hr>
        </article>
      ))}
    </div>
  )
}