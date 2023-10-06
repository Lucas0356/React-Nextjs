import Link from 'next/link'
import './Header.css'

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

export function Header () {
  return (
    <header className='header'>
      <nav className='navbar'>
        <ul className='menu'>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
