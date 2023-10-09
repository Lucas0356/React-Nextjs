'use client'

// Importamos los estilos
import styles from '../styles/ListOfComments.module.css'

// Importa el componente LikeButton
import LikeButton from './LikeButton'

// Importa la etiqueta Image de Next.js para mostrar imágenes
// import Image from 'next/image';

// Importamos los hooks
import { useState, useEffect } from 'react'

// Importamos el servicio
import { searchComments } from '../services/CommentsService'

export default function ListOfComments({ postId }) {
  const [comments, setComments] = useState(null); // Estado para almacenar los comentarios

  console.log(postId)

  useEffect(() => {
    // Función asincrónica para cargar los comentarios de las publicación
    async function fetchComments() {
      try {
        const fetchedComments = await searchComments(postId); // Espera a que se resuelva la promesa
        console.log(fetchedComments)
        setComments(fetchedComments); // Actualiza el estado con los comentarios de la publicación
      } catch (error) {
        console.error('Error al cargar los comentarios:', error);
      }
    }
    fetchComments(); // Llama a la función para cargar los datos cuando el componente se monta
  }, []); // Se ejecuta solo una vez cuando se renderiza

  console.log(comments)

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