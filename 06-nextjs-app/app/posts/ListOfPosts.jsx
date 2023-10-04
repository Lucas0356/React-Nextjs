// Mock de datos
import posts from '../mocks/posts.json';
// Estilos
import './ListOfPosts.css'
// Importamos la etiqueta Image de Next.js
import Image from 'next/image';

export default function ListOfPosts() {

  const hasPosts = posts?.length > 0

  return (
    <>
      {hasPosts
        ? (
          posts.slice(0, 8).map((post) => (
            <article className='post' key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </article>
          ))
        )
        : (
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
    </>
  )
}
