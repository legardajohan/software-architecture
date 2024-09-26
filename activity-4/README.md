# Arquitectura de Microservicios

Se presenta un sistema básico de gestión de usuarios y productos, donde los servicios de **"Usuarios"** y **"Productos"** están desacoplados. La idea es que cada uno de estos servicios funcione de manera independiente y se puedan acceder a través de API. Usaremos un archivo index.html con algo de estilo, y los servicios estarán implementados en JavaScript.

### Estructura del proyecto
```
/microservices-architecture
    /client
        - index.html
        - style.css
        - app.js (App para el frontend)
    /services
        - userService.js
        - productService.js
    - server.js (Servidor principal que une los microservicios, backend)
```
### Instalación y ejecución:
1. **Instalar las dependencias:**
   Primero, instala las dependencias necesarias (en este caso, solo Express).

   ```bash
   npm init -y
   npm install express
   ```

2. **Ejecutar el servidor:**
   Luego, puedes ejecutar el servidor.

   ```bash
   node server.js
   ```

3. **Acceder a la aplicación:**
   Abre el navegador y ve a `http://localhost:3000`. Deberías ver la página que lista usuarios y productos que provienen de los microservicios.

### Explicación:
- **Servicios desacoplados:** Los microservicios de usuarios y productos están implementados en archivos separados (`userService.js` y `productService.js`), lo que permite que funcionen de manera independiente.
- **Comunicación mediante APIs:** La aplicación en el navegador hace `fetch` a las rutas `/users` y `/products`, que corresponden a los servicios de usuarios y productos, respectivamente.
- **Servidor principal:** El archivo `server.js` actúa como punto central que une los microservicios y sirve el frontend estático (`index.html`).
