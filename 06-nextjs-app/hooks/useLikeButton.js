// Importa los hooks
import { useState, useEffect } from 'react'

export function useLikeButton({ type, id }) {
    const [liked, setLiked] = useState(false)

    // Construir la clave en función del tipo y el ID
    const storageKey = `${type}_${id}`;

    // Cargar el estado de liked desde localStorage al cargar la página
    useEffect(() => {
        const storedLiked = localStorage.getItem(storageKey);
        if (storedLiked) {
            setLiked(JSON.parse(storedLiked));
        }
    }, []);

    const handleClick = () => {
        // Creamos nueva variable y así garantizamos que estamos trabajando con el valor actualizado de liked 
        const newLiked = !liked;
        setLiked(newLiked);

        // Guardar el estado de liked en localStorage solo si está likeado
        if (newLiked) {
            localStorage.setItem(storageKey, JSON.stringify(newLiked));
        } else {
            // Si no está likeado, eliminamos la entrada del almacenamiento local
            // (Esto debido a que por defecto no está likeado, así optimizamos almacenamiento)
            localStorage.removeItem(storageKey);
        }
    };

    return { liked, handleClick }
}