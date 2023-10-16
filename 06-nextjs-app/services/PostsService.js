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
