// Importa los hooks
import { useState } from 'react'

export function usePostWithComments() {
    // Estado de los comentarios
    const [commentsVisibility, setCommentsVisibility] = useState(false)

    // Cambiar estado de los comentarios
    const handleClick = () => {
        setCommentsVisibility(!commentsVisibility)
    }

    return { commentsVisibility, handleClick }
}