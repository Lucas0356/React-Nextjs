// Le indicamos a next que LikeButton necesita utilizar el cliente y que por lo tanto no va a ser de servidor.
'use client'

// Importa los estilos
import styles from '../styles/LikeButton.module.css'

// Importa el componente de icono
import IconComponent from '../components/IconComponent'

// Importa el custom hook con la lógica
import { useLikeButton } from '@/hooks/useLikeButton'

export default function LikeButton ({ type, id }) {
  // Llamamos a nuestro custom hook
  const { liked, handleClick } = useLikeButton({type, id})

  return (
    <button className={styles['like-button']} onClick={handleClick}>
      <IconComponent
        iconName="favorite"
        className={`${styles.icon} ${liked ? styles.liked : styles['not-liked']}`}
      />
    </button>
  )
}