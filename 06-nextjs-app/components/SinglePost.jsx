// Mock de datos
import post from '../app/mocks/single-post.json'
// Importamos los estilos de ListOfPosts pq son los mismos
import './ListOfPosts.css'
// Importamos la etiqueta Image de Next.js
import Image from 'next/image'
// Importamos componentes
import { LikeButton } from './LikeButton'

export default function SinglePost ({ id }) {
  const hasPosts = post != null

  return (
    <div className='posts-container'>
      {
      hasPosts
        ? (
          <article className='post' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className='like-button-container'>
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
          }
    </div>
  )
}
