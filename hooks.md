<h1 align="center"> Documentación de Hooks </h1>

## Índice:
* [Custom Hook](#custom-hook)

* [UseContext](#usecontext)
  
* [UseState](#usestate)

* [UseCallback & UseMemo](#usecallback--usememo)

* [UseEffect](#useeffect)
  
* [useReducer](#usereducer)

* [useId](#useid)

#### <h1>Custom Hook:</h1>
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

#### <h1>UseContext:</h1>

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

#### <h1>UseState:</h1>

El hook useState es utilizado para crear variables de estado, quiere decir que su valor es dinámico, que este puede cambiar en el tiempo y eso requiere una re-renderización del componente donde se utiliza

Recibe un parámetro:

- El valor inicial de nuestra variable de estado.

Devuelve un array con dos variables:

- En primer lugar tenemos la variable que contiene el valor
- La siguiente variable es una función set, requiere el nuevo valor del estado, y este modifica el valor de la variable que anteriormente mencionamos
- Cabe destacar que la función proporciona cómo parámetro el valor actual del propio estado. Ex: setIsOpen(isOpen => !isOpen) => !isOpen)

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
### <h1>UseCallback & useMemo:</h1>

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

#### <h1>useEffect:</h1>

- **[Video explicativo sobre useEffect](https://www.youtube.com/watch?v=_SPoSMmN3ZU)** 

El hook useEffect se usa para ejecutar un código cuando se renderiza el componente o cuando cambian las dependencias.

Recibe dos parámetros:

- Una función que se ejecutará cuando se renderice el componente (es decir en un principio) o cada vez que cambien las 'dependencias'.
- Un array de dependencias [ ]. Si cambia el valor de alguna dependencia, ejecutará la función nuevamente.

**Ejemplo de la estructura**

```javascript
useEffect(() => {
  // Función a ejecutar

  return () => {
    // Función cleanup
  }
}, [/*dependencias*/])
```

Un ejemplo: mostramos un mensaje en consola cuando carga el componente y cada vez que cambia el valor de count:

```javascript
import { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

//define el hook
  useEffect(() => {
    // Lo que se ejecuta cuadno cambie la dependencia o cuando se renderice el componente 
    console.log('El contador se ha actualizado')
  }, [count])

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </>
  )
}
```

**Casos de uso del hook useEffect**

Podemos usar el hook useEffect de diferentes formas, tales como:

- Ejecutar código cuando se renderiza el componente, cuando cambian las dependencias del efecto o cuando se desmonta el componente.
- Util para hacer llamadas a APIs, ya que sea nada más montar el componente o cuando cambian las dependencias.
- Realizar tracking de eventos, como Google Analytics, para saber qué páginas visitan los usuarios.
- Podemos validar un formulario para que cada vez que cambie el estado, podamos actualizar la UI y mostrar dónde están los errores.
- Podemos suscribirnos a eventos del navegador, como por ejemplo el evento resize para saber cuando el usuario cambia el tamaño de la ventana.

**Dependencias**
Dependiendo si colocas o no dependencia, cambia la accion del useEffect

	*[ ] vacio, se ejecuta **SOLO** una vez cuando se renderiza el componente al que pertenece.
	*[state/variable] se ejecuta una primera vez cuando se renderiza el componente y cada vez que cambia el estado de ese "state/variable".
	*sin dependencias, es decir sin usar [], cada vez que se renderice el componente, se va a ejecutar la funcion del useEffect.

**Funcion cleanup**
Es una funcion que se ejecuta dentro del hook useEffect y sirve para limpiar algun script.

Ejemplo:

```javascript
function Example(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        //funcion que se dispara al renderizar
        console.log("funcion del efecto");

        const intervalId = setInterval (()=>{
            setCount(count+1);
        }, 1000);

        //funcion cleanup
        return () => {
            console.log("funcion cleanup");
            clearInterval(intervalId);
        }
    }, [count]);

    return <div>{count}</div>

}

export default Example;

```


**EJEMPLO MAS COMUN DE USO DE USEFFECT**
```javascript

    //defino mi fetch
    const getPost = async (userId) => {
        const url = '';
        const res = await fetch(url);
        const posts = await res.json();
        return posts;
    }

    //defino una funcion con mi fetch invocado adentro
    const updatePosts = () => {
        getPosts()
            .then((newPosts) => {
                setsPosts(newPosts);
            })
    }

    //genero el useEffect que me ejecuta una funcion dependiendo del user
    useEffect(( ) => {
        updatePosts();
    },[user])

```
#### <h1>UseReducer:</h1>

Nos sirve para guardar estados, es una alternativa más compleja al useState. Nos permite tener distintas formas de modificar un estado

- **[Video explicativo sobre useReducer:](https://www.youtube.com/watch?v=BACpj7GmiEo)**

Importamos useReducer
```javascript
import { useReducer } from 'react'
```

Estructura general de un useReducer:
Como parámetros recibe un estado (buena práctica ponerle siempre un valor inicial) y la acción que nosotros vayamos a enviar.
Nos devuelve un array con 2 posiciones (al igual que el useState). En este caso, nos devuelve el estado y una función llamada 'dispatch', la cual sirve para poder enviar eventos, los cuales al pasar por el reducer, modifican el estado internamente. 

```javascript
const [state, dispatch] = useReducer((state = [], action) => {
  // Lógica
});
```

Ejemplo de llamado al useReducer con la acción 'add_task':
(Este ejemplo es desde un evento de un formulario)

```javascript
const handleSubmit = (event) => {
  event.preventDefault(); // Le dice al formulario html que no haga su función
  // por defecto y que haga la siguiente: 
  dispatch({
    type: 'add_task',
    title: inputRef.current.value
  })
}
```

Utilizamos el condicional switch para diferenciar los diferentes tipos de acciones que nos lleguen al useReducer. También es interesante implementar el caso default por si nos llega una acción que no tenemos controlada, en ese caso simplemente retornamos el estado. 

```javascript
const [state, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case 'add_task': {
        // Lógica 
      }
      default: {
        return state;
      }
    }
});
```

Para evitar problemas y tener el estado más controlado, Es importante que el useReducer siempre devuelva un nuevo objeto que represente el nuevo estado.

```javascript
const [state, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case 'add_task': {
        return [ // Retornamos nuevo array
          ...state, // Recuperamos los valores del estado anterior (spread operator)
          { id: generarId(), title: action.title} // Nuevo valor
        ]
      }
      default: {
        return state;
      }
    }
});
```

#### <h1>UseId:</h1>

Este Hook tiene la funcionalidad de generar un identificador único que simpre va a ser el mismo y que funciona con 'server as rendering'. Nos puede ayudar a evitar errores al ingresar nosotros mismos un identificador manualmente.

Importamos useId
```javascript
import { useId } from 'react'
```

Ejemplo para generar un identificador único con useId para categoryFilterId
```javascript
const categoryFilterId = useId();
```

