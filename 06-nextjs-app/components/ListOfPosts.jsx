// Importa el archivo JSON de mock de posts
import posts from '../app/mocks/posts.json'

// Importamos los estilos
import styles from '../styles/ListOfPosts.module.css'

// Importamos el componente post
import Post from './Post'

export default function ListOfPosts() {
  return (
    <div className={styles['posts-container']}>
      {
        /* Mapea y muestra los primeros 8 posts  */
        posts.slice(0, 8).map((post) => (
          <Post post={post} withComments={false} />
          ))
      }
    </div>
  )
}
