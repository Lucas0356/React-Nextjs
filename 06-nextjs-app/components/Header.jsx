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
  const [windowWidth, setWindowWidth] = useState(null);

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
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const newWindowWidth = window.innerWidth;
        setWindowWidth(newWindowWidth);

        if (newWindowWidth > 768 && menuOpen) {
          setMenuOpen(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
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