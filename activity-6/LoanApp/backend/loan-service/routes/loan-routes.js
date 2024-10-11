const express = require('express');
const router = express.Router();
const Loan = require('../models/loan-schema');

// Crear nuevo préstamo
router.post('/loans', async (req, res) => {
  try {
    const newLoan = new Loan(req.body);
    await newLoan.save();
    res.status(201).send("Usuario guardado correctamente: ", loan);
  } catch (err) {
    console.error("Error al guardar el usuario: ", error);
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

module.exports = router;
