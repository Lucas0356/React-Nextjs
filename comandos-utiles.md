Para copiar archivos origen@destino:/ruta..

```
scp mydev.ini lmoltedo@frios:/etc/sistemas/db
```

Para mostrar todos los paquetes o instalaciones necesarias

```
sudo yum list
```


Luego para instalar algun en particular

(sin comillas)
```
sudo yum install 'nombrepaqueteainstalar'
```

*para filtrar entre toda la lista por algun nombre en particular* (entre asterisco)

```
sudo yum list *palabra a filtrar*
```

Clonar un proyecto (ejemplo)

```
git clone 'git@gitlab.cooperativaobrera.coop:logistica/scm/backend.git'
```

Cambiar de rama:

```
git checkout devel
```

Levantar docker
```
sudo docker compose up -d
```
**PD:el -d es para que corra en segundo plano como si fuera un demonio**. 

Dar de baja al docker
```
sudo docker compose down
```

Acceder al docker
```
sudo docker ps -a
sudo docksh docker-scm-1
```

Ya dentro del docker te aparece asi

```
[/var/www/html] [docker] scm #
//comprobar la version de php
[/var/www/html] [docker] scm # php -v

```

Salir del docker

```
exit
```

Bajar el proyecto de codeigniter
```
[~/proyectos/scm/backend/src]
[SYS]🥊frios >  composer install --no-dev --ignore-platform-reqs
```

Comando CAT

Cat es la abreviatura de concatenar. Esto se refiere al hecho de que cat puede ser utilizado para combinar múltiples archivos en un archivo, también se puede utilizar para crear nuevos archivos y para mostrar el contenido de los archivos existentes. 

cat se utiliza a menudo como una forma sencilla de **ver el contenido de un archivo de texto**.
```bash
cat archivo.txt
> Hola! Este es el contenido del archivo de texto :)
```

<hr></hr>

<h2>VI</h2>

**Sobreescribir un archivo**

*utilizar flechitas para moverse entre las lineas del archivo*.

*escribir 'dd' sobre una linea de archivo para borrarlo*.


```bash
vi  nombrearchivo
```
*una vez que termines, apretar la tecla escape y luego los siguientes comandos:*

:x = guardar los cambios
:q = salir sin guardar



Levantar server de php/codeigniter
```
php -S <mi_ip>:8080 -t .
```
Dar permisos de escritura a la carpeta
```
chmod -R 777 writable
```


