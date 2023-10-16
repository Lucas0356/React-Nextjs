'use client'

import { searchGifs } from "@/services/Gifs"
import { useEffect, useState } from "react"
import Gif from '../components/Gif'
import styles from '../styles/ListOfGifs.module.css'

export default function ListOfGifs() {

  // Estado para almacenar los gifs
  const [gifs, setGifs] = useState(null);

  // Estado de carga
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Función asincrónica para cargar los datos de las publicaciones
    async function fetchGifs() {
      try {
        const fetchedGifs = await searchGifs(); // Espera a que se resuelva la promesa
        setGifs(fetchedGifs); // Actualiza el estado con los datos de las publicaciones
      } catch (error) {
        console.error('Error al cargar los gifs:', error);
      } finally {
        setIsLoading(false); // Cuando la solicitud finaliza (ya sea con éxito o error), detenemos la carga.
      }
    }
    fetchGifs(); // Llama a la función para cargar los datos cuando el componente se monta
  }, []); // Se ejecuta solo una vez cuando se renderiza

  if (isLoading) {
    // Muestra un indicador de carga mientras se obtienen los datos.
    return <p>Loading...</p>;
  }

  return (
    <div className={styles["gifs-container"]}>
        {
          gifs && gifs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
          ))
        }
    </div>
  )
}