## Principios SOLID en REACT.JS

Video recomendado sobre SOLID: 
https://www.youtube.com/watch?v=jKdt-BnTTR0

5 principios SOLID:

- **S**ingle responsibility principle (SRP)
- **O**pen-closed principle (OCP)
- **L**iskov substituion principle (LSP)
- **I**nterface segregation principle (ISP)
- **D**ependency inversion principle (DIP)


- **Single responsibility principle (SRP)**

Evitar que un componente tenga más de una responsabilidad.

- **Open-closed principle (OCP)**

Componente abierto a extensión, pero cerrado a modificación.
Un ejemplo muy claro sería usar { children } para extender la funcionalidad. 

- **Liskov substituion principle (LSP)**

Las subclases deben ser sustituibles por sus clases base.

Esto significa que, dado que la clase B es una subclase de la clase A, deberíamos poder pasar un objeto de la clase B a cualquier método que espere un objeto de la clase A y el método no debería dar ningún resultado extraño en ese caso.
