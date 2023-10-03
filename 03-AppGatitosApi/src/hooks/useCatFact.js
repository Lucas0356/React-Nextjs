import { useEffect, useState } from "react"
import { getRandomFact } from '../services/facts'

export function useCatFact () {
    // Estado del fact
    const [fact, setFact] = useState()

    // Función para refrescar el fact
    const refreshCatFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    // Para recuperar la cita al cargar la página
    useEffect(refreshCatFact, [])

    return { fact, refreshCatFact}
}