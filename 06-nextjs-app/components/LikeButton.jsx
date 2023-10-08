// Le indicamos a next que LikeButton necesita utilizar el cliente y que por lo tanto no va a ser de servidor.
'use client'

// Importamos los estilos
import styles from '../styles/LikeButton.module.css'

// Importamos los hooks
import { useState, useEffect } from 'react'

// Importamos el componente de icono
import IconComponent from '../components/IconComponent'

export default function LikeButton ({ type, id }) {
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

  return (
    <button className={styles['like-button']} onClick={handleClick}>
      <IconComponent
        iconName="favorite"
        className={`${styles.icon} ${liked ? styles.liked : styles['not-liked']}`}
      />
    </button>
  )
}