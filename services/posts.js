const url = 'https://jsonplaceholder.typicode.com/posts'

export const searchPosts = async () => {
    try {
        const response = await fetch(url)
        const posts = await response.json()

        // Buena práctica mappear los resultados de la api, para no depender de ella
        return posts?.map( post => ({
            userId: post.userId,
            id: post.id,
            title: post.title,
            body: post.body
        }))
    } catch (e) {
        throw new Error('Hubo un error en la búsqueda de los posts')
    }
}