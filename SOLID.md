## Principios SOLID en REACT.JS

Video recomendado sobre SOLID: 
https://www.youtube.com/watch?v=jKdt-BnTTR0

### 5 principios SOLID:

- **S**ingle responsibility principle (SRP)
- **O**pen-closed principle (OCP)
- **L**iskov substituion principle (LSP)
- **I**nterface segregation principle (ISP)
- **D**ependency inversion principle (DIP)

<hr></hr>

**<h2>Single responsibility principle (SRP)</h2>**
Evitar que un componente tenga más de una responsabilidad.

**<h2>Open-closed principle (OCP)</h2>**

Componente abierto a extensión, pero cerrado a modificación.
Un ejemplo muy claro sería usar { children } para extender la funcionalidad. 

**<h2>Liskov substituion principle (LSP)</h2>**

Las subclases deben ser sustituibles por sus clases base.

Esto significa que, dado que la clase B es una subclase de la clase A, deberíamos poder pasar un objeto de la clase B a cualquier método que espere un objeto de la clase A y el método no debería dar ningún resultado extraño en ese caso.

**<h2>Interface segregation principle (ISP)</h2>**

Los clientes no deberían depender de interfaces que no necesitan.

Esto significa que deberíamos pasarle a los componentes solo las props que necesitan.

**<h2>Dependency inversion principle (DIP)</h2>**

Nuestros componentes deberían depender de abstracciones y no de implementaciones concretas.

El principio de inversión de dependencia establece que nuestras clases deben depender de interfaces o clases abstractas en lugar de clases y funciones concretas.
