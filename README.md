# Car CRUD App

Este proyecto es una aplicación web simple para gestionar una lista de carros, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y el registro de usuarios.

## Características

- Registro de usuarios
- Login
- CRUD de carros (Crear, Leer, Actualizar, Eliminar)
- Conexión a SQL Server

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/car-crud-app.git

2. Instala las dependencias:

npm install

3. Crea una base de datos en SQL Server llamada LoginCRUDDB e importa la estructura de la base de datos.

4. Configura la conexión a la base de datos en el archivo src/services/db.ts:

const config: sql.config = {
  server: 'DESKTOP-HL8DA13\\SQLEXPRESS',  // Cambia a tu servidor
  database: 'LoginCRUDDB',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

## Ejecución

1. Inicia el servidor:

npx ts-node-dev src/app.ts

2. Abre el navegador y ve a http://localhost:3000 para acceder a la aplicación.

## Tecnologías utilizadas
Node.js
Express.js
TypeScript
SQL Server
mssql (paquete de Node.js para conectarse a SQL Server)

## Estructura del Proyecto
src/ - Código fuente principal
src/controllers/ - Controladores para manejar las rutas de la API
src/routes/ - Definición de las rutas para el CRUD y el login
src/views/ - Páginas HTML para el frontend

## Contribución
Si quieres contribuir a este proyecto, crea un fork del repositorio, realiza tus cambios y crea un pull request con una descripción clara de las modificaciones.