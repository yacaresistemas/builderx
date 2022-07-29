# Proyecto BuilderX

1.- Clonar el proyecto
### git clone https://github.com/anthony-munozm/ProfileBuilder.git

Luego se puede abrir dos terminales con Visual Code, para ejecutar simultaneamente los dos proyectos tanto el backend como el frontend

# FrontEnd

Luego de clonar este proyecto para ejecutar el frontend los siguientes comandos

1.- Abrir la carpeta del frontend
### cd frontend

2.- Instalar dependencias
### npm install

3.- Iniciar aplicación
### npm start

Requisitos:
- Tener instalado Node
- Tener instalado npm


# BackEnd

Luego de clonar este proyecto para ejecutar el frontend los siguientes comandos

1.- Abrir la carpeta del backend
### cd backend
 
2.- Instalar dependencias con composer
### composer install

3.- Generar key
### php artisan jwt:secret

4.- Ejecutar las migraciones
### php artisan migrate

5.- Ejecutar los seeders
### php artisan db:seed --force

6.- Iniciar la aplicacion
### php artisan serve

Requisitos:
- Tener instalado Composer


