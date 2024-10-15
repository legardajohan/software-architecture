# LoanApp
## Estructura del Proyecto

El proyecto **LoanApp** usa el stack MERN, con Arquitectura de Microservicios. En este enfoque, cada servicio maneja su propio esquema y lógica, y cada servicio estará ordenado en archivos independientes para mantener una estructura clara y modular.

```
LoanApp/
│
├── loan-api/                    # Aplicación backend (Node.js, express)
│   ├── user-service/            # Microservicio de Usuarios
│   ├── article-service/         # Microservicio de Artículos
│   ├── loan-service/            # Microservicio de Préstamos
│   └── package.json             # Dependencias comunes
│
├── loan-web/                    # Aplicación frontend (React)
│   └── src                      # Componentes del frontend
│   └── package.json             # Dependencias del frontend

```

## Iniciar base de datos con MongoDB

El archivo ubicado en `LoanApp/init-db.js` contiene los scripts para ejecutarlos en Mongo Sell (mongosh o mongo).

1. Abre Mongo Shell (mongosh o mongo).

2. Ejecuta los scripts paso a paso, o puedes usar el archivo `init-db.js` y ejecutarlo de la siguiente manera: `mongosh < init-db.js`.

3. Revisa que MongoDB Compass en `localhost:27017` se encuentre la base de datos `loanapp` con sus colecciones de `articles, loans, users`. Caso contrario repite los pasos anteriores. 

## Instrucciones para ejecutar el backend

1. Instalar dependencias:

    + Desde la ruta `software-architecture\activity-6\LoanApp\loan-api`, ejecuta en la consola:
        `npm install`

2. Ejecutar el servidor de desarrollo:

    + Una vez instaladas las dependencias, ejecuta:
        `npm start`

3. Se ejecutaran desde diferentes endpoints los microservicios de `loan-service`, `article-service` y `user-service`.

## Instrucciones para ejecutar el frontend

1. Instalar dependencias:

    + Desde la ruta `software-architecture\activity-6\LoanApp\loan-web`, ejecuta en la consola:
        `npm install`

2. Ejecutar el servidor de desarrollo:

    + Una vez instaladas las dependencias, ejecuta:
        `npm start`

3. El frontend debe estar disponible en `http://localhost:3000/`, donde podrá registrar un usuario e iniciar sesión, permitiendo registrar préstamos incialmente. 



