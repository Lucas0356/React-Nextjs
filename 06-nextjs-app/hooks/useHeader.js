// Importa los hooks
import { useState, useEffect } from 'react'

export function useHeader() {
    // Estados
    const [menuOpen, setMenuOpen] = useState(false);
    const [, setWindowWidth] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    const closeMenu = () => {
        setTimeout(() => {
            setMenuOpen(false) // Cierra el menú estableciendo menuOpen en false
        }, 300);
    };

    // Efecto para cerrar el menú movile cuando el ancho de la ventana sea mayor que 768 píxeles
    // (Esto debido a que si quedaba abierto y se agrandaba la pantalla seguía apareciendo)
    useEffect(() => {
        // Esta función se ejecutará solo en el lado del cliente
        const handleResize = () => {
            // Verifica si 'window' está definido para evitar problemas en el servidor
            if (typeof window !== 'undefined') {
                // Obtiene el ancho actual de la ventana
                const newWindowWidth = window.innerWidth;
                // Actualiza el estado con el nuevo ancho de ventana
                setWindowWidth(newWindowWidth);

                // Comprueba si el menú está abierto y el ancho de la ventana es mayor que 768 píxeles
                if (newWindowWidth > 768 && menuOpen) {
                    // Cierra el menú si cumple con las condiciones anteriores
                    setMenuOpen(false);
                }
            }
        };

        // Verifica si 'window' está definido para evitar problemas en el servidor
        if (typeof window !== 'undefined') {
            // Registra el evento de cambio de tamaño solo si 'window' está definido
            window.addEventListener('resize', handleResize);

            // Llama a 'handleResize' inicialmente para establecer el valor correcto
            handleResize();

            return () => {
                // Elimina el evento de cambio de tamaño al desmontar el componente
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [menuOpen]);

    return { menuOpen, toggleMenu, closeMenu }
}