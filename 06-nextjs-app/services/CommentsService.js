// Importa el archivo JSON de mock de comentarios
import backupData from '../app/mocks/comments.json'

const BASE_API_URL = 'https://jsonplaceholder.typicode.com/posts/';

export const searchComments = async (id) => {
    try {
        const response = await fetch(BASE_API_URL + id + '/comments')

        console.log(BASE_API_URL + id + '/comments')

        if (!response.ok) {
            // Si la respuesta no es exitosa, lanza una excepción
            throw new Error('Error en la solicitud a la API');
        }

        const comments = await response.json();

        // Devuelve el objeto de la API directamente
        return comments

    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        // En caso de error, devolver los datos de respaldo
        return backupData;
    }
};
