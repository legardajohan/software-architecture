const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user-routes');
const app = express();

app.use(express.json());
app.use(userRoutes);

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/loanapp', 
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB (Usuarios)'))
  .catch(err => console.error('Error de conexión:', err));

app.listen(3001, () => {
  console.log('User Service escuchando en el puerto 3001');
});
