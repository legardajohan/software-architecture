const express = require('express');
const router = express.Router();
const Article = require('../models/article-schema');

// Crear nuevo artículo
router.post('/articles', async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(201).send(article);
  } catch (err) {
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

module.exports = router;
