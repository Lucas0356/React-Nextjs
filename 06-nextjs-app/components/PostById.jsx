'use client'

// Importamos los estilos
import styles from '../styles/IndividualPost.module.css'

// Importamos la etiqueta Image de Next.js
import Image from 'next/image'

// Importamos componentes
import PostWithComments from './PostWithComments'

// Importa el custom hook con la lógica
import { usePostById } from '../hooks/usePostById'

export default function PostById({ id, listOfComments=null }) {
  // Llamamos a nuestro custom hook
  const { post } = usePostById({id})

  return (
    post
      ? (
        <div className={styles['post-container']}>
          <PostWithComments post={post} listOfComments={listOfComments} />
        </div>
      )
      : (
        <article>
          <p>No se ha encontrado un post con el id {id}</p>
          <Image
            src='https://http.cat/images/404.jpg'
            alt='error 404 not found image cat'
            width={300}
            height={200}
          />
        </article>
      )
  )
}