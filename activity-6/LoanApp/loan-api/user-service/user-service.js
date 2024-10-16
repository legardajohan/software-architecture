const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { router } = require('./routes/user-routes');

const app = express();

// Middleware para permitir CORS (para que el frontend pueda hacer peticiones)
app.use(cors());
app.use(express.json());
app.use(router);

mongoose.set('strictQuery', false);
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://127.0.0.1:27017/loanapp', 
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB (Users)'))
  .catch(err => console.error('Error de conexión:', err));

app.listen(PORT, () => {
  console.log(`User Service escuchando en el puerto ${PORT}`);
});