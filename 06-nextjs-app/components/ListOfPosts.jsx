// Importa el archivo JSON de mock de posts
import posts from '../app/mocks/posts.json'

// Importa los estilos del componente
import './ListOfPosts.css'

// Importa la etiqueta Image de Next.js para mostrar imágenes
import Image from 'next/image'

// Importa el componente LikeButton
import { LikeButton } from '../components/LikeButton'

// Importa la etiqueta Link de Next.js para la navegación
import Link from 'next/link'

export default function ListOfPosts () {
  // Comprueba si hay posts en el mock de datos
  const hasPosts = posts?.length > 0

  return (
    <div className='posts-container'>
      {hasPosts
        ? (
          // Mapea y muestra los primeros 10 posts si existen
            posts.slice(0, 8).map((post) => (
              <article className='post' key={post.id}>
                <Link className='link' href='/posts/[id]' as={`/posts/${post.id}`}>
                  <h3 className='title'>{post.title}</h3>
                  <p>{post.body}</p>
                </Link>
                <div className='like-button-container'>
                  <LikeButton />
                </div>
              </article>
            ))
          )
        : (
          // Muestra un mensaje si no se encuentran posts
          <article>
            <p>No se han encontrados posts</p>
            <Image
              src='https://http.cat/images/404.jpg'
              alt='error 404 not found image cat'
              width={300}
              height={200}
            />
          </article>
          )}
    </div>
  )
}
