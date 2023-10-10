<h1 align="center"> Documentación de Hooks </h1>

## Índice:
* [Custom Hook](#custom-hook)

* [UseContext](#usecontext)
  
* [UseState](#usestate)

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

Sirve para pasar la información a través de distintos componentes y que a su vez, tengan acceso a la información proporcionada del contexto desde cualquier punto. Es una buena práctica utilizarlo puesto que evita el propdrilling.

- **[Video explicativo sobre useContext:](https://www.youtube.com/watch?v=Ae33_gdJgnQ)**
- **[GitHub con el código de ejemplo](https://github.com/GarajedeIdeas/CodePills-ReeactHooks-USECONTEXT)**

Debemos importar la librería entera de React
```javascript
import React from 'react';
```
Ejemplo de creación de un context-
```javascript
export const ejemploContext = React.createContext();
```
El provider se encarga de brindarles el contexto a los hijos que envuelve. Se le puede pasar un valor, puede ser cualquier cosa (incluso funciones).
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
Ejemplo de uso del contexto desde uno de los hijos que ha sido envuelto por el mismo.
```javascript
// Importamos useContext desde React
import { useContext } from 'react';
// Importamos el ejemploContext que hemos creado
import { ejemploContext } from '../App';

export default function Hijo() {

// Generamos un objeto y recuperamos la información del context 
const ejemplo = useContext(ejemploContext);

return (
	<p>Hijo</p>
    );
}
```

Si queremos utilizar el contexto en un archivo totalmente a parte, haciendo uso de la encapsulación, podemos hacerlo con el uso de los providers de la siguiente manera:

- 📂 Creamos una carpeta providers para almacenarlos.
- 🔨 Creamos el archivo del provider dentro de la misma, en este ejemplo el nombre será **userProvider.jsx**. El archivo deberá tener una estructura similar a la siguiente:
  ```javascript
	// Importamos React, useState y useContext
	import React, { useState, useContext } from "react";
	
	// Contexto del usuario
	const userContext = React.createContext()
	// Contexto para cambiar la información del usuario
	const userToggleContext = React.createContext();
	
	
	// Tanto useUserContext como useUserToggleContext son dos Hooks que nos van a permitir
	// tener un mejor encapsulamiento, haciendo que el hijo puedra traer la info llamando 
	// a los hooks, y no teniendo que exportar las consts directamente.
	export function useUserContext() {
	    return useContext(userContext);
	}
	
	export function useUseToggleContext() {
	    return useContext(userToggleContext);
	}
	
	export function UserProvider() {
	
	    // Creamos un estado para luego pasarlo como value del contexto
	    const [user, setUser] = useState(null);
	
	    // Función para settear el usuario
	    const cambiaLogin = () => {
	        if (user) {
	            setUser(null);
	        } else {
	            setUser({
	                name: 'Lucas',
	                email: 'lucasmoltedo03@gmail.com'
	            })
	        }
	    }
	
	    return (
	        // A todos los componentes que se encuentren dentro de los providers les vamos a poder
  		// pasar el usuario y la función para poder modificarlo.
	        <userContext.Provider value={user}>
	            <userToggleContext.Provider value={cambiaLogin}>
	                {children}
	            </userToggleContext.Provider>
	        </userContext.Provider>
	    );
	}
	```
- Ahora, dentro de App.jsx, deberíamos tener lo siguiente:
  ```javascript
	import React, { useState } from 'react';
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

- Finalmente, podemos hacer uso de los contextos con los componentes hijos de la siguiente manera:
```javascript
import { useUserContext, useUserToggleContext } from "../provders/UserProvider";

export default function Hijo () {

    // Recuperamos la información de los contextos con los custom hooks
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
### UseCallback:


- **[Video explicativo sobre useCallback](https://www.youtube.com/watch?v=duh3uKn0qnU)**
- **[Video explicativo sobre useCallback 2](https://www.youtube.com/watch?v=dT3bC6M9G70)** 
