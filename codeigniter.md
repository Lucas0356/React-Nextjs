<h1>Codeigniter</h1>

<hr></hr>
<h2>Activar modo de desarrollo</h2>

<details>
<summary>Ver contenido</summary>
<br>

De forma predeterminada, Codeigniter inicia con el **modo de producción**, si queremos cambiar al **modo de desarrollo**, debemos hacer lo siguiente:
  
- **Copiar o renombrar el archivo env como .env** (es importante no subirlo al repositorio de manera pública puesto que este archivo puede contener información sensible).
- **Descomentamos la línea de con 'CI_ENVIRONMENT' y cambiamos su valor al de producción:**
  
  ```
  CI_ENVIRONMENT = development
  ```
</details>
<hr></hr>

<h2>Controller</h2>

<details>
<summary>Ver contenido</summary>
<br>

The first thing you’re going to do is set up a controller to handle static pages. A controller is simply a class that helps delegate work. It is the glue of your web application.

The controller is what will become the center of every request to your web application. Like any PHP class, you refer to it within your controllers as $this.


<details>
<summary>Ver ejemplo de un controller</summary>
<br>

Tenemos una clase llamada Pages, con un método View() que acepta un argumento llamado $page. Tambien tiene un método index(). Tanto ```public function view($page = 'home')``` como ```return view('welcome_message')``` son técnicamente funciones, pero cuando creamos una función dentro de una clase, esta es llamada como **método**.
```php
<?php

namespace App\Controllers;

class Pages extends BaseController
{
    public function index()
    {
        return view('welcome_message');
    }

    public function view($page = 'home')
    {
        // ...
    }
}
```
La clase Pages extiende de BaseController, que a su vez extiende de CodeIgniter\Controller class, lo que significa que la nueva clase Pages tiene acceso a los métodos y propiedades ya definidas en CodeIgniter\Controller class (system/Controller.php).

</details>
</details>

<hr></hr>
<h2>Views</h2>

<details>
<summary>Ver contenido</summary>
<br>


