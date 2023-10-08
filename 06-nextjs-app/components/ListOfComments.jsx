// Importa el archivo JSON de mock de posts
import comments from '../app/mocks/comments.json'

// Importamos los estilos
import styles from '../styles/ListOfComments.module.css'

// Importa el componente LikeButton
import LikeButton from './LikeButton'

// Importa la etiqueta Image de Next.js para mostrar imágenes
// import Image from 'next/image';

export default function ListOfComments() {

  const cargarComentarios = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  }

  return (
    <div className={styles['comments-container']}>
      <div className={styles['comments-container-header']}>
        <h3>Comments</h3>
      </div>
      {cargarComentarios()}
      {comments.map((comment) => (
        <article className={styles.comment} key={comment.id}>
          <div className={styles['user-info-content']}>
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.email}`}
              alt='user photo'
              width={50}
              height={50}
            />
            <h4 className={styles.email}>{comment.email}</h4>
          </div>
          <h5 className={styles['comment-title']}>{comment.name}</h5>
          <p className={styles['comment-body']}>{comment.body}</p>
          <div className={styles['like-button-container']}>
            <LikeButton />
          </div>
          <hr className={styles['comment-separator']}></hr>
        </article>
      ))}
    </div>
  )
}