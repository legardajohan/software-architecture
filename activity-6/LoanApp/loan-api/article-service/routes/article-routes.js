const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Article = require('../models/article-schema');

const secretKey = 'mySuperSecretKey'; // Clave secreta para generar el token

// Middleware para verificar el JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']; // Asegúrate de que el token esté en el formato correcto
  if (!token) return res.status(403).json({ error: 'No token provided' });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(500).json({ error: 'Failed to authenticate token' });
    req.userId = decoded.userId;
    next();
  });
};

// Crear nuevo artículo
router.post('/articles', verifyToken, async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.status(201).send("Artículo guardado correctamente");
  } catch (err) {
    console.error("Error al guardar el artículo");
    res.status(400).send(err);
  }
});

// Obtener todos los artículos
router.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).send(articles);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = { router, verifyToken };
