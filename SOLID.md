# Principios SOLID en REACT.JS

### Video Recomendado

Para una comprensión más profunda de los Principios SOLID en React.js, te recomendamos ver este video: [Video SOLID en React](https://www.youtube.com/watch?v=jKdt-BnTTR0)

<hr></hr>

5 principios SOLID:

- **S**ingle responsibility principle (SRP)
- **O**pen-closed principle (OCP)
- **L**iskov substituion principle (LSP)
- **I**nterface segregation principle (ISP)
- **D**ependency inversion principle (DIP)

<hr></hr>

**<h2>Single responsibility principle (SRP)</h2>**
<details>
<summary>Ver contenido</summary><br>
  
El principio de **responsabilidad única** sostiene que un componente debe tener **una única responsabilidad**. En React, esto significa que un componente debe hacer **una cosa** y hacerla bien. Debemos evitar que los componentes realicen **múltiples tareas**. Si un componente se encarga de **demasiadas cosas**, es mejor dividirlo en componentes más pequeños, cada uno con **una única responsabilidad**.

</details>
<hr></hr>

**<h2>Open-closed principle (OCP)</h2>**
<details>
<summary>Ver contenido</summary><br>
  
**El principio abierto-cerrado** sugiere que un componente debe estar **abierto a la extensión**, pero **cerrado a la modificación**. En React, el principio abierto-cerrado implica que un componente debe ser **extensible para nuevas funcionalidades** sin necesidad de modificar su **código original**. Esto se logra mediante la **composición de componentes** y el uso de **props personalizadas** en lugar de modificar el componente base.

</details>
<hr></hr>

**<h2>Liskov substituion principle (LSP)</h2>**
<details>
<summary>Ver contenido</summary><br>
  
Este principio se refiere a que las subclases deben poder sustituir a sus **clases base** sin cambiar el **comportamiento esperado**. En React, esto significa que los **componentes hijos** deben poder ser utilizados en lugar de sus **componentes padres** sin causar efectos secundarios. Garantiza que los **componentes hijos** mantengan la misma **interfaz** que sus **padres** para evitar **comportamientos inesperados**.

</details>
<hr></hr>

**<h2>Interface segregation principle (ISP)</h2>**
<details>
<summary>Ver contenido</summary><br>
  
**El principio de segregación de interfaces** establece que los clientes no deben depender de **interfaces** que no necesitan. En React, esto se traduce en pasar solo las **props necesarias** a un **componente** en lugar de pasar un **objeto grande con muchas propiedades**. Esto reduce la **dependencia innecesaria** y facilita la **reutilización de componentes**.

</details>
<hr></hr>

**<h2>Dependency inversion principle (DIP)</h2>**
<details>
<summary>Ver contenido</summary><br>
  
En React, el principio de inversión de dependencia implica que nuestros componentes deben depender de conceptos generales y abstractos en lugar de detalles concretos y específicos. Esto significa que en lugar de depender de cómo se hace algo en particular, deberían depender de lo que se debe hacer en términos más generales.

Por ejemplo, en lugar de depender directamente de un componente o función específica, un componente en React debe depender de una **interfaz** o **abstracción** que defina lo que se espera que haga ese componente o función. Esto hace que los componentes sean más flexibles, intercambiables y fáciles de mantener, ya que pueden adaptarse a diferentes implementaciones sin cambiar su código principal. En resumen, el DIP fomenta la **flexibilidad** y la **reutilización** en el desarrollo de software.

</details>
<hr></hr>
