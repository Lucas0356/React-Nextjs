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
