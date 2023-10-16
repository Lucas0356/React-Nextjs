// Importa el archivo JSON de mock de un post
import backupData from '../app/mocks/single-post.json'

const BASE_API_URL = 'https://jsonplaceholder.typicode.com/posts/';

export const searchPost = async ({id}) => {
    try {
        const response = await fetch(BASE_API_URL + id)

        if (!response.ok) {
            // Si la respuesta no es exitosa, lanza una excepción
            throw new Error('Error en la solicitud a la API');
        }

        const post = await response.json();

        // Devuelve el objeto de la API directamente
        return {
            userId: post.userId,
            id: post.id,
            title: post.title,
            body: post.body,
        };
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        // En caso de error, devolver los datos de respaldo
        return backupData;
    }
};
