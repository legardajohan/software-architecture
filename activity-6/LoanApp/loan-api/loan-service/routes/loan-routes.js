const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Loan = require('../models/loan-schema');

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

// Crear nuevo préstamo
router.post('/loans', verifyToken, async (req, res) => {
  try {
    const newLoan = new Loan(req.body);
    await newLoan.save();
    res.status(201).send("Préstamo guardado correctamente");
  } catch (err) {
    console.error("Error al guardar el préstamo");
    res.status(400).send(err);
  }
});

// Obtener todos los préstamos
router.get('/loans', async (req, res) => {
  try {
    const loans = await Loan.find().populate('user_id').populate('article_id');
    res.status(200).send(loans);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = { router, verifyToken };
