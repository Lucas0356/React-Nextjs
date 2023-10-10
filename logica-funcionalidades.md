<h1 align="center"> Funciones o logica para reutilizar o darse una idea de como hacer cierta cosas </h1>

**Paginacion FACIL** con BOTON ANTERIOR/SIGUIENTE => https://www.youtube.com/watch?v=Q9jT1fZTV38

```javascript
"use client";

// Importa los estilos
import styles from "../styles/ListOfPosts.module.css";

// Importa el componente post
import Post from "./Post";

// Importa el custom hook con la lógica
import { usePosts } from "../hooks/usePosts";
import { useState } from "react";

export default function ListOfPosts() {
  // Llamamos a nuestro custom hook
  const { posts } = usePosts();
  const [currentPage, setCurrentPage] = useState(0);

  const jumpPage = 8;

  const filterPost = () => {
    return posts.slice(currentPage, currentPage + jumpPage);
  };

  const nextPage = () => {
    // console.log(currentPage);
    setCurrentPage(currentPage + jumpPage);
  };
  const previousPage = () => {
    // console.log(currentPage);
    if (currentPage > 0) {
      setCurrentPage(currentPage - jumpPage);
    }
  };

  //devuelve true o false si la pagina actual es mayor a 0
  const canShowPrevious = currentPage > 0;
  console.log(canShowPrevious);
  //devuelve true o false si la pagina actual mas 8 es menor a la longitud de los posts (son 100)
  const canShowNext = currentPage + jumpPage < posts.length;   
  console.log(canShowNext)

  return (
    <>
      <div className={styles["posts-container"]}>
        {
          /* Mapea y muestra los primeros 8 posts  */
          filterPost().map((post) => (
            <Post post={post} key={post.id} />
          ))
        }
      </div>
      <div className={styles.btnContainer}>
      {/* utilizamos la propiedad disabled de los botones para deshabilitarlos cuando estas variables sean false. De esta manera, los botones solo estarán habilitados cuando sea posible navegar entre las páginas de posts. */}
        <button className={styles.btnPag} onClick={previousPage} disabled={!canShowPrevious}>
          Anterior
        </button>
        <button className={styles.btnPag} onClick={nextPage} disabled={!canShowNext}>
          Siguiente
        </button>
      </div>
    </>
  );
}
```
<h2>APIS Y FETCH</h2>
La mejor forma de hacer fetch de una API: **importante ponerla como si fuera un servicio**

```javascript
// Importa el archivo JSON de mock de posts
import backupData from '../app/mocks/posts.json'

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const searchPosts = async () => {
    try {
        const response = await fetch(API_URL)

        if (!response.ok) {
            // Si la respuesta no es exitosa, lanza una excepción
            throw new Error('Error en la solicitud a la API');
        }

        const posts = await response.json()

        // Mappear y devolver los datos de la API
        return posts?.map(post => ({
            userId: post.userId,
            id: post.id,
            title: post.title,
            body: post.body,
        }))
        
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        // En caso de error, devolver los datos de respaldo
        return backupData;
    }
};
```
Otro ejemplo de un fetch: 
```javascript
export const GetGifs = async (category) => {
  const url = `api.giphy.com/v1/gifs/search?api_key=S0OH4a2MNzA8Us61z9sgOtDjJJldhuNX&q=${category}&limit=20`;
  const response = await fetch(url);
  const { data } = await response.json();

    //toma el array de data y devuelve otro array mapeado con todos los objetos adentro
    const gifs = data.map(img=> {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
};
```
Ejemplo de fetchear API usando **'then'**:
```javascript
import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
```



