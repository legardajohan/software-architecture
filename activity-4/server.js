const express = require('express');
const path = require('path');

// Importar los microservicios
const userService = require('./services/userService');
const productService = require('./services/productService');

const app = express();

// Usar los microservicios
app.use(userService);
app.use(productService);

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'client')));

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
