// Importamos estilos:
import '../styles/globals.css'

// Importamos componentes:
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>App con Next.js</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}