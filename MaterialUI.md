https://mui.com/material-ui/react-box/

Si queres por ejemplo armar un div usas el componente Box. Que es basicamente un div. Si queres que sea otro elemento usas el box tiene la prop component que le podes decir que elemento deberia ser del html. por ej component="main" va a tener todas las mejoras de material y te va a renderizar un elemento main en el html

```javascript



import { Box, Fab } from '@cooperativaobrera/react-ui-kit';
import { useState } from 'react';

const styles = {
  container: {
    position: 'fixed',
    bottom: 8 * 3,
    right: 8 * 3,
    backgroundColor: 'common.white',
    borderRadius: '10px',
    boxShadow: '1px 2px 5px rgba(51, 57, 81, 0.30)',
  },
  fabButton: {
    width: '80px',
    height: '56px',
    transition: 'width 0.2s, opacity 0.2s',
    overflow: 'hidden',
    borderRadius: 'inherit',
    '& span': {
      display: 'flex',
      alignItems: 'center',
      ml: 1,
      whiteSpace: 'nowrap',
      textAlign: 'left',
      opacity: 0,
      transition: 'opacity 0.2s',
    },
    '&[data-is-hovered=true]': {
      width: '200px',
      '& span': {
        opacity: 1,
      },
    },
  },
};

export default function FabSaveButton({
  onClick, disabled, icon, text, sx,
}) {
  const [isHovered, setIsHovered] = useState(false);
  let closeTimeout;

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearTimeout(closeTimeout);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  return (
    <Box sx={{ ...styles.container, ...sx }}>
      <Fab
        data-is-hovered={isHovered}
        sx={styles.fabButton}
        color="accent"
        variant={isHovered ? 'expanded' : 'circular'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        disabled={disabled}
      >
        {icon}
        {isHovered && <span>{text}</span>}
      </Fab>
    </Box>
  );
}

```
