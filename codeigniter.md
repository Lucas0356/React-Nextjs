<h1>Codeigniter</h1>

<h2>Activar modo de desarrollo</h2>

<details>
<summary>Ver contenido</summary>
<br>

De forma predeterminada, Codeigniter inicia con el **modo de producción**, si queremos cambiar al **modo de desarrollo** debemos hacer lo siguiente:
  
- **Copiar o renombrar el archivo env como .env** (es importante no subirlo al repositorio de manera pública puesto que este archivo puede contener información sensible).
- **Descomentamos la línea de con 'CI_ENVIRONMENT' y cambiamos su valor al de producción:**
  ```
  CI_ENVIRONMENT = development
  ```
</details>
