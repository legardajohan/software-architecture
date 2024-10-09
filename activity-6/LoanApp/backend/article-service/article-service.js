const express = require('express');
const mongoose = require('mongoose');
const articleRoutes = require('./routes/article-routes');
//const cors = require('cors');
const app = express();

app.use(express.json());
app.use(articleRoutes);

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/loanapp', 
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB (Artículos)'))
  .catch(err => console.error('Error de conexión:', err));

app.listen(3002, () => {
  console.log('Article Service escuchando en el puerto 3002');
});
