'use client'

// Importa los estilos
import styles from '../styles/Header.module.css'

// Importa el custom hook con la lógica
import { useHeader } from '../hooks/useHeader'

// Importa la etiqueta Link de Next.js para la navegación
import Link from 'next/link'

// Importa componente
import IconComponent from './IconComponent'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Gifs',
  route: '/gifs'
}, {
  label: 'Posts',
  route: '/posts'
}
]

export function Header() {
  // Llamamos a nuestro custom hook
  const { menuOpen, toggleMenu, closeMenu } = useHeader()

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