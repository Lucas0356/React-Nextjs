// Importa los hooks
import { useState, useEffect } from 'react'

// Importa el servicio
import { searchComments } from '../services/CommentsService'

export function useComments({ postId }) {
    // Estado para almacenar los comentarios
    const [comments, setComments] = useState(null);

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

    return { comments }
}