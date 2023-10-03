import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
    // Estado del imageUrl
    const[imageUrl, setImageUrl] = useState()

    // Efecto para buscar imagen de gatos cada vez que se actualiza fact
    useEffect(() => {
        if (!fact) return

        // Nos guardamos las 3 palabras
        const threeFirstWords = fact.split(' ').slice(0,3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const { url } = response
            setImageUrl(url)
        })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
