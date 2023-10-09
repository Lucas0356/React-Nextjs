'use client'

// Importamos los estilos
import styles from '../styles/IndividualPost.module.css'

// Importamos la etiqueta Image de Next.js
import Image from 'next/image'

// Importamos componentes
import PostWithComments from './PostWithComments'

// Importamos el servicio
import { searchPost } from '../services/SinglePostService'

// Importamos los hooks
import { useState, useEffect } from 'react'

export default function IndividualPost({ id, listOfComments=null }) {
  const [post, setPost] = useState(null); // Estado para almacenar las publicaciones
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  useEffect(() => {
    // Función asincrónica para cargar los datos de las publicaciones
    async function fetchPost() {
      try {
        const fetchedPost = await searchPost({id}); // Espera a que se resuelva la promesa
        setPost(fetchedPost); // Actualiza el estado con los datos de las publicaciones
      } catch (error) {
        console.error('Error al cargar la publicación:', error);
      } finally {
        // Cuando la solicitud finaliza (ya sea con éxito o error), detenemos la carga.
        setIsLoading(false);
      }
    }
    fetchPost(); // Llama a la función para cargar los datos cuando el componente se monta
  }, []); // Se ejecuta solo una vez cuando se renderiza

  if (isLoading) {
    // Muestra un indicador de carga mientras se obtienen los datos.
    return <p>Cargando...</p>;
  }

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