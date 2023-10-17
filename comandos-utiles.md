//Para copiar archivos origen@destino:/ruta..

```
scp mydev.ini lmoltedo@frios:/etc/sistemas/db
```

//para mostrar todos los paquetes o instalaciones necesarias

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


