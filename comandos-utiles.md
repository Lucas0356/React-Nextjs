<h2>SCP</h2>

**Para copiar archivos origen@destino:/ruta..**

```
scp mydev.ini lmoltedo@frios:/etc/sistemas/db
```

<h2>CAT</h2>

Cat es la abreviatura de concatenar. Esto se refiere al hecho de que cat puede ser utilizado para combinar múltiples archivos en un archivo, también se puede utilizar para crear nuevos archivos y para mostrar el contenido de los archivos existentes. 

cat se utiliza a menudo como una forma sencilla de **ver el contenido de un archivo de texto**.
```bash
cat archivo.txt
> Hola! Este es el contenido del archivo de texto :)
```

<h2>VI</h2>

**Sobreescribir un archivo**

*utilizar flechitas para moverse entre las lineas del archivo*.

*escribir 'dd' sobre una linea de archivo para borrarlo*.

```bash
vi  nombrearchivo
```
Una vez que termines, apretar la tecla escape y luego los siguientes comandos

- :x => guardar los cambios
- :q => salir sin guardar

Sobreescribir un archivo

<hr></hr>


**Dar permisos de escritura a la carpeta**
```
chmod -R 777 writable
```

<hr></hr>

<h2>Yum list / install</h2>

**Para mostrar todos los paquetes o instalaciones necesarias**

```bash
sudo yum list
```

**Para instalar algun paquete en particular**
(sin comillas)
```
sudo yum install 'nombrepaqueteainstalar'
```

**Para filtrar entre toda la lista por algun nombre en particular** (entre asterisco)
```
sudo yum list *palabra a filtrar*
```
<hr></hr>

<h2>Docker</h2>

**Levantar docker**

<sub>PD: El -d es para que corra en segundo plano como si fuera un demonio.</sub>
```
sudo docker compose up -d
```

**Dar de baja al docker**
```bash
sudo docker compose down
```

**Acceder al docker**
```
sudo docker ps -a
sudo docksh docker-scm-1
```

**Ya dentro del docker te aparece asi**

```
[/var/www/html] [docker] scm #
//comprobar la version de php
[/var/www/html] [docker] scm # php -v

```

**Salir del docker**

```
exit
```

<hr></hr>

<h2>PHP</h2>

**Levantar server de php/codeigniter**
```
php -S <mi_ip>:8080 -t .
```

**Bajar el proyecto de codeigniter**
```
[~/proyectos/scm/backend/src]
[SYS]🥊frios >  composer install --no-dev --ignore-platform-reqs
```
