const express = require('express');
const app = express();

// Simulación de una base de datos de productos
const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Phone', price: 599.99 }
];

// Endpoint para obtener la lista de productos en formato JSON
app.get('/products', (req, res) => {
    res.json(products); // Responder con la lista de productos en formato JSON
});

module.exports = app;
