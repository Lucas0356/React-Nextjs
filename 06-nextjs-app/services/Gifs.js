const API_URL = 'https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8';

export const searchGifs = async () => {
    try {
        const response = await fetch(API_URL)

        const json = await response.json()

        const gifs = json.results

        // Buena práctica mappear los resultados de la api, para no depender de ella
        const gifsFormatted = await gifs.map( gif => ({
            id: gif.id,
            description: gif.content_description,
            url: gif.media[0].gif.url
        }))

        console.log(gifsFormatted)

        return gifsFormatted

    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }
};