# LoanApp
## Estructura del Proyecto

El proyecto **LoanApp** usando el stack MERN, estructurado de acuerdo a una Arquitectura de Microservicios. En este enfoque, cada servicio maneja su propio esquema y lógica, y cada servicio estará ordenado en archivos independientes para mantener una estructura clara y modular. MongoDB será nuestra base de datos, y se conectará de forma local.

```
LoanApp/
│
├── backend/
│   ├── user-service/            # Microservicio de Usuarios
│   │   ├── models/              # Esquema de MongoDB
│   │   │   └── user.js          # Esquema de Usuario
│   │   ├── routes/              # Rutas API
│   │   │   └── userRoutes.js    # Rutas del microservicio
│   │   └── index.js             # Servidor del microservicio
│   ├── article-service/         # Microservicio de Artículos
│   │   ├── models/              # Esquema de MongoDB
│   │   │   └── article.js       # Esquema de Artículo
│   │   ├── routes/              # Rutas API
│   │   │   └── articleRoutes.js # Rutas del microservicio
│   │   └── index.js             # Servidor del microservicio
│   ├── loan-service/            # Microservicio de Préstamos
│   │   ├── models/              # Esquema de MongoDB
│   │   │   └── loan.js          # Esquema de Préstamos
│   │   ├── routes/              # Rutas API
│   │   │   └── loanRoutes.js    # Rutas del microservicio
│   │   └── index.js             # Servidor del microservicio
│   └── package.json             # Dependencias comunes
│
├── frontend/                    # Aplicación frontend (React)
│
├── public/
│   └── index.html               # HTML base
├── src/
│   ├── components/
│   │   ├── Header.js            # Componente de encabezado
│   │   ├── UserForm.js          # Formulario para usuarios
│   │   ├── ArticleForm.js       # Formulario para artículos
│   │   ├── LoanForm.js          # Formulario para préstamos
│   │   ├── UserList.js          # Listado de usuarios
│   │   ├── ArticleList.js       # Listado de artículos
│   │   └── LoanList.js          # Listado de préstamos
│   ├── App.js                   # Componente principal
│   ├── App.css                  # Estilos personalizados
│   └── index.js                 # Entrada principal de React
├── package.json                 # Dependencias del frontend
```
## Instrucciones para ejecutar el frontend:
1. Instalar dependencias:

    + Desde la carpeta frontend/, ejecuta:
        `npm install`

2. Ejecutar el servidor de desarrollo:

    + Una vez instaladas las dependencias, ejecuta:
        `npm start`

Esto iniciará la aplicación en modo de desarrollo. Si todo está bien configurado, el frontend debería estar disponible en `http://localhost:3000/`.

## Iniciar base de datos con MongoDB

El archivo ubicado en `LoanApp/init-db.js` contiene los scripts para ejecutarlos en Mongo Sell (mongosh o mongo).

1. Abre Mongo Shell (mongosh o mongo).

2. Ejecuta los scripts paso a paso, o puedes usar el archivo `init-db.js` y ejecutarlo de la siguiente manera: `mongosh < init-db.js`.

