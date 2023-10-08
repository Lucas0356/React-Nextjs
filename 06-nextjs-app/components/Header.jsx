'use client'

// Importamos los estilos
import styles from '../styles/Header.module.css'

// Importamos los hooks
import { useState } from 'react'

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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setMenuOpen(false); // Cierra el menú estableciendo menuOpen en false
      }, 300);
  };

  return (
    <header className={styles.header}>

      <nav className={styles.navbar}>
        {
          menuOpen
            ? (
              <button className={styles['menu-button']} onClick={toggleMenu}>
                <IconComponent iconName="close" className={styles.icon} onClick={toggleMenu} />
              </button>
            )
            : (
              /* Botón de menú desplegable */
              <button className={styles['menu-button']} onClick={toggleMenu}>
                <IconComponent iconName="menu" className={styles.icon} />
              </button>
            )
        }
        {/* Menú de navegación */}
        <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ label, route }) => (
            <Link href={route}>
              <li className={styles['menu-item']} key={route} onClick={closeMenu}>
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}