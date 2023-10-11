<h1 align="center"> Documentación de Hooks </h1>

## Índice:
* [Custom Hook](#custom-hook)

* [UseContext](#usecontext)
  
* [UseState](#usestate)

* [UseCallback & UseMemo](#usecallback--usememo)

### Custom Hook:
Es una función de JavaScript, su nombre comienza con 'use' y **puede llamar a otros Hooks.**

Estructura de un Custom Hook:

```javascript
// Importamos los Hooks que vamos a utilizar
import { useState, useEffect } from 'react';

// Creamos la función
function useEjemplo(props) {  
  // Lógica del Hook

  // Retornamos
  return { , } ;
}
```

### UseContext:

Es una herramienta que facilita la transferencia de información entre diferentes componentes, permitiendo un acceso sencillo a los datos proporcionados por el contexto desde cualquier punto de la aplicación. Su utilización es una práctica recomendada ya que elimina la necesidad del "prop drilling" o pasar datos a través de múltiples componentes intermedios.

- **[Video explicativo sobre useContext:](https://www.youtube.com/watch?v=Ae33_gdJgnQ)**
- **[GitHub con el código de ejemplo](https://github.com/GarajedeIdeas/CodePills-ReeactHooks-USECONTEXT)**

Implementación Básica:
Primero, importamos la librería de React:
```javascript
import React from 'react';
```
Luego, creamos un contexto utilizando React.createContext():
```javascript
export const ejemploContext = React.createContext();
```

El Provider se encarga de compartir el contexto con los componentes hijos. Se le puede asignar un valor, que puede ser cualquier cosa, incluso funciones:
```javascript
export default function App() {
  const [ejemplo, setEjemplo] = useState(null);

  return (
    <ejemploContext.Provider value={ejemplo}>
      <div className="App">
        <Hijo />
      </div>
    </ejemploContext.Provider>
  );
}
```

Uso en Componentes Hijos:
Para utilizar el contexto en un componente hijo, simplemente importamos useContext de React y el contexto que hemos creado:
```javascript
import { useContext } from 'react';
import { ejemploContext } from '../App';

export default function Hijo() {
  const ejemplo = useContext(ejemploContext);

  return (
    <div>
      <p>Hijo</p>
    </div>
  );
}
```

Encapsulación con Proveedores:
Si deseamos encapsular el contexto en un archivo separado, podemos hacerlo mediante proveedores:
- 📂 Creamos una carpeta providers para almacenarlos.
- 🔨 Creamos el archivo del provider. Ejemplo utilizando un proveedor de usuario:
```javascript
import React, { useState, useContext } from 'react';

// Crear contextos para el usuario y la función de cambio de login
const userContext = React.createContext();
const userToggleContext = React.createContext();

// Hook personalizado para obtener el contexto del usuario
export function useUserContext() {
  return useContext(userContext);
}

// Hook personalizado para obtener la función de cambio de login
export function useUseToggleContext() {
  return useContext(userToggleContext);
}

// Proveedor de contexto que envuelve la aplicación
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Función para cambiar el estado del usuario
  const cambiaLogin = () => {
    setUser(user ? null : { name: 'Lucas', email: 'lucasmoltedo03@gmail.com' });
  };

  return (
    // Proporcionar el contexto del usuario y la función de cambio de login a los componentes hijos
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={cambiaLogin}>
        {children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
}
```

Dentro de App.jsx, utilizamos este proveedor:
  ```javascript
	import React from 'react';
	import './App.css';
	import Hijo from './components/Hijo';
	import { UserProvider } from './providers/UserProvider';
	
	function App() {
	  return (
	    <UserProvider>
	      <div className="App">
	        <Hijo />
	      </div>
	    </UserProvider>
	  );
	}
	
	export default App;
	```

Finalmente, en los componentes hijos, accedemos a los contextos usando los custom hooks:
```javascript
import { useUserContext, useUserToggleContext } from "../provders/UserProvider";

export default function Hijo () {

    // Obtenemos el contexto del usuario y la función de cambio de login
    const user = useUserContext();
    const cambiaLogin = useUserToggleContext();

    return <div>
        <h2>Componente Hijo</h2>
        {user && <p>Hola {user.name}</p>}
        <button onClick={cambiaLogin}>Cambia Login</button>
    </div>
}
```

### UseState:

El hook useState es utilizado para crear variables de estado, quiere decir que su valor es dinámico, que este puede cambiar en el tiempo y eso requiere una re-renderización del componente donde se utiliza

Recibe un parámetro:

    El valor inicial de nuestra variable de estado.

Devuelve un array con dos variables:

    En primer lugar tenemos la variable que contiene el valor
    La siguiente variable es una función set, requiere el nuevo valor del estado, y este modifica el valor de la variable que anteriormente mencionamos
    Cabe destacar que la función proporciona cómo parámetro el valor actual del propio estado. Ex: setIsOpen(isOpen => !isOpen) => !isOpen)

En este ejemplo mostramos como el valor de count se inicializa en 0, y también se renderiza cada vez que el valor es modificado con la función setCount en el evento onClick del button:

```javascript
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>Aumentar</button>
    </>
  )
}

```
Ejemplo real de un caso con useState:
```javascript

// Importa los hooks
import { useState, useEffect } from 'react'

// Importa el servicio
import { searchPosts } from '../services/PostsService'

export function usePosts() {
    const [posts, setPosts] = useState([]); // Estado para almacenar las publicaciones

    useEffect(() => {
        // Función asincrónica para cargar los datos de las publicaciones
        async function fetchPosts() {
            try {
                const fetchedPosts = await searchPosts(); // Espera a que se resuelva la promesa
                setPosts(fetchedPosts); // Actualiza el estado con los datos de las publicaciones
            } catch (error) {
                console.error('Error al cargar las publicaciones:', error);
            }
        }
        fetchPosts(); // Llama a la función para cargar los datos cuando el componente se monta
    }, []); // Se ejecuta solo una vez cuando se renderiza

    return { posts }
}
```
### UseCallback & useMemo:

Sirven para memorizar diferentes funciones generadas en nuestros componentes, para que cuando el componente vuelva a renderizarse, esa función ya esté renderizada y no tenga que volver a ser creada. Pudiendo mejorar el rendimiento de nuestra aplicación.

- **[Video explicativo sobre useCallback](https://www.youtube.com/watch?v=duh3uKn0qnU)**
- **[Video explicativo sobre useCallback 2](https://www.youtube.com/watch?v=dT3bC6M9G70)** 

Implementación Básica:
Primero, importamos el hook que vayamos a utilizar :
```javascript
import { useCallback, useMemo } from "react"
```

La sintaxis de ambos hooks es la misma:
```javascript
const callback = useCallback(parametro1, parametro2)
const memo = useMemo(parametro1, parametro2)
```
Parametro 1: La función que queremos guardar igual entre diferentes renderizados

Parametro 2: [ ] Array de dependencias (Al igual que en useEffect)
```javascript
const callback = useCallback(doble, [])
const memo = useMemo(doble, [])
```

¿Qué guarda cada una?
- Callback te devuelve exactamente la función, por lo que se puede llamar a la misma:
```javascript
console.log(callback)
> function doble()
console.log(callback())
> 2
```
- Memo no devuelve la función memorizada, sino que la ejecuta y devuelve el valor memorizado, por lo que no puede ejecutarse:
```javascript
console.log(memo)
> 2
console.log(memo())
> Error
```

La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia. En este ejemplo ambas dependen de cont, es decir, al cambiar de valor cont, se van a volver a memorizar con los valores actualizados:
```javascript
const callback = useCallback(doble, [cont])
const memo = useMemo(doble, [cont])
```

La ventaja es que si la prop count no cambia, se evita la creación de una nueva función y se devuelve la función que ya se había calculado previamente.
