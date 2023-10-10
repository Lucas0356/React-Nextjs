<h1 align="center"> Funciones o logicas para darse una idea de como hacer cierta cosas </h1>

Paginacion facil con BOTON ANTERIOR/SIGUIENTE

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
