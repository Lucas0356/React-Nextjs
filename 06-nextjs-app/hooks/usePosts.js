// Importa los hooks
import { useState, useEffect } from 'react'

// Importa el servicio
import { searchPosts } from '../services/PostsService'

export function usePosts() {
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

    return { posts }
}