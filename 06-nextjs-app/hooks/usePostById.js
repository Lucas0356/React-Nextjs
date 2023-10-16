// Importa los hooks
import { useState, useEffect } from 'react'

// Importa el servicio
import { searchPost } from '../services/SinglePostService'

export function usePostById({ id }) {
    // Estado para almacenar las publicaciones
    const [post, setPost] = useState(null);
    // Estado de carga
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Función asincrónica para cargar los datos de las publicaciones
        async function fetchPost() {
            try {
                const fetchedPost = await searchPost({ id }); // Espera a que se resuelva la promesa
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

    return { post }
}