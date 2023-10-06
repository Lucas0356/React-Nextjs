// Le indicamos a next que SinglePost necesita utilizar el cliente y que por lo tanto no va a ser de servidor.
'use client'

// Mock de datos
import post from '../app/mocks/single-post.json'

// Importamos los estilos
import './SinglePost.css'

// Importamos la etiqueta Image de Next.js
import Image from 'next/image'

// Importamos los hooks
import { useState } from 'react'

// Importamos componentes
import { LikeButton } from './LikeButton'

// Importamos link
import Link from 'next/link'

export default function SinglePost({ id }) {
  const [commentsVisibility, setCommentsVisibility] = useState(false)
  const hasPosts = post != null

  const handleClick = () => {
    setCommentsVisibility(!commentsVisibility)
  }

  return (
    hasPosts
      ? (
        <article className='single-post' key={post.id}>
          <h3 className='title'>{post.title}</h3>
          <p>{post.body}</p>
          <div className='buttons-container'>
            <Link className='show-comments'
              href={commentsVisibility ? `/posts/${id}` : `/posts/${id}/comments` }
              onClick={handleClick}>
                {commentsVisibility ? 'Hide comments' : 'Show comments'}
                </Link>
            <LikeButton />
          </div>
        </article>
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
