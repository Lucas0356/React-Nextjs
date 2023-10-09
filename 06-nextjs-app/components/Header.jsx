'use client'

// Importamos los estilos
import styles from '../styles/Header.module.css'

// Importamos los hooks
import { useState, useEffect } from 'react'

// Importa la etiqueta Link de Next.js para la navegación
import Link from 'next/link'
import IconComponent from './IconComponent'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
  label: 'Posts',
  route: '/posts'
}
]

export function Header() {
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

  return (
    <header className={styles.header}>

      <nav className={styles.navbar}>
        <button className={styles['menu-button']} onClick={toggleMenu}>
          {
            menuOpen
            ? <IconComponent iconName="close" className={styles.icon} />
            : <IconComponent iconName="menu" className={styles.icon} />
          }
        </button>

        {/* Menú de navegación */}
        <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ label, route }) => (
            <Link href={route} key={route}>
              <li className={styles['menu-item']} onClick={closeMenu}>
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}