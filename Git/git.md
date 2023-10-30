## Comandos Git


### AÑADIR ARCHIVOS

<details>
<summary><strong>Ver contenido</strong></summary><br>
  
- **Añadir el archivo con el nombre indicado**
```bash
git add <nombre_archivo>
```
- **Añadir todo los archivos presentes en el directorio**
```bash
git add .
```
</details>

<h2>COMMIT</h2>

Se utiliza para guardar nuestros cambios, aunque únicamente a nivel local.

- **Hacer un commit con todos los archivos seleccionados**
```bash
git commit -m "mensaje del commit"
```
- **(completar)**
```bash
git commit -am "mensaje del commit"
```

<h2>PUSH</h2>

<h2>PULL</h2>

<h2>BRANCH</h2>

<h2>CHECKOUT</h2>

<h2>MERGE</h2>

<details>
<summary><strong>Ver contenido</strong></summary><br>

```bash
git checkout master
git merge rama_de_trabajo
git branch -d rama_de_trabajo
```

En este ejemplo, primero se cambia a la rama main, se realiza un git merge con la rama o branch secundaria “rama_de_trabajo”, que conecta ambas ramas, y luego se elimina la rama secundaria redundante con el comando “git branch -d”.


</details>

<h2>REBASE</h2>
