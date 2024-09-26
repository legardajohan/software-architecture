const express = require('express');
const app = express();

// Simulación de una base de datos de usuarios
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];

// Endpoint para obtener la lista de usuarios en formato JSON
app.get('/users', (req, res) => {
    res.json(users); // Responder con la lista de usuarios en formato JSON
});

module.exports = app;
