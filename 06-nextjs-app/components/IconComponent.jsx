// Importa los estilos de Material Icons
import 'material-icons/iconfont/material-icons.css'

function IconComponent({ icon, className='' }) {
  // Combina las clases CSS necesarias para el ícono, permitiendo personalización
  const combinedClassName = `icon material-icons ${className}`;

  // Renderiza el ícono con las clases CSS combinadas
  return <i className={combinedClassName}>{icon}</i>;
}

export default IconComponent