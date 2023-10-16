// Importa los estilos de Material Icons
import 'material-icons/iconfont/material-icons.css'

export default function IconComponent ({ iconName, className='' }) {
  // Combina las clases CSS necesarias para el ícono, permitiendo personalización
  const combinedClassName = `material-icons ${className}`

  // Renderiza el ícono con las clases CSS combinadas
  return <i className={combinedClassName}>{iconName}</i>
}