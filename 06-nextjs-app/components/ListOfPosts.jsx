'use client'

// Importamos los estilos
import styles from '../styles/ListOfPosts.module.css'

// Importamos el componente post
import Post from './Post'

// Importamos el servicio
import { searchPosts } from '../services/PostsService'

// Importamos los hooks
import { useState, useEffect } from 'react'

export default function ListOfPosts() {
  const [posts, setPosts] = useState([]); // Estado para almacenar las publicaciones

  useEffect(() => {
    // Función asincrónica para cargar los datos de las publicaciones
    async function fetchPosts() {
      try {
        const fetchedPosts = await searchPosts(); // Espera a que se resuelva la promesa
        setPosts(fetchedPosts); // Actualiza el estado con los datos de las publicaciones
      } catch (error) {
        console.error('Error al cargar las publicaciones:', error);
      }
    }
    fetchPosts(); // Llama a la función para cargar los datos cuando el componente se monta
  }, []); // Se ejecuta solo una vez cuando se renderiza

  return (
    <div className={styles['posts-container']}>
      {
        /* Mapea y muestra los primeros 8 posts  */
        posts.slice(0, 8).map((post) => (
          <Post post={post} key={post.id}/>
          ))
      }
    </div>
  )
}
