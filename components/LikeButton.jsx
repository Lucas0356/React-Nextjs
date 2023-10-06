// Le indicamos a next que LikeButton necesita utilizar el cliente y que por lo tanto no va a ser de servidor.
'use client'

// Importamos estilos
import './LikeButton.css'

// Importamos los hooks
import { useState } from 'react'

// Importamos el componente de icono
import IconComponent from '../components/IconComponent'

export function LikeButton () {
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setLiked(!liked)
  }

  return (
    <button className='like-button' onClick={handleClick}>
      <IconComponent icon='favorite' className={liked ? 'liked' : 'not-liked'} />
    </button>
  )
}
