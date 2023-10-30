Podemos aplicar estilos y media queries asi:

importamos styled

```javascript
const Search = styled('div')({
  position: 'relative',
  backgroundColor: '#f2f2f2',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
  marginRight: 0,
  marginLeft: 0,
  width: '100%',
  '@media (min-width: 600px)': {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '400px',
  },
});
```
