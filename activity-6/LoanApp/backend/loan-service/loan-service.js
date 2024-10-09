const express = require('express');
const mongoose = require('mongoose');
const loanRoutes = require('./routes/loan-routes');
const app = express();

app.use(express.json());
app.use(loanRoutes);

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/loanapp', 
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB (Préstamos)'))
  .catch(err => console.error('Error de conexión:', err));

app.listen(3003, () => {
  console.log('Loan Service escuchando en el puerto 3003');
});
