// Importa el archivo JSON de mock de posts
import comments from '../app/mocks/comments.json'

// Importa los estilos del componente
import './ListOfComments.css'

// Importa el componente LikeButton
import { LikeButton } from './LikeButton'

// Importa la etiqueta Image de Next.js para mostrar imágenes
import Image from 'next/image';

export default function ListOfComments() {

  const cargarComentarios = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })
  }

  return (
    <div className='comments-container'>
      <div className='comments-container-header'>
        <h3>Comments</h3>
      </div>
      {cargarComentarios()}
      {comments.map((comment) => (
        <article className='comment' key={comment.id}>
          <div className='user-info-content'>
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.email}`}
              alt='user photo'
              width={50}
              height={50}
            />
            <h4 className='email'>{comment.email}</h4>
          </div>
          <h5 className='comment-title'>{comment.name}</h5>
          <p className='comment-body'>{comment.body}</p>
          <div className='like-button-container'>
            <LikeButton />
          </div>
          <hr className='comment-separator'></hr>
        </article>
      ))}
    </div>
  )
}
