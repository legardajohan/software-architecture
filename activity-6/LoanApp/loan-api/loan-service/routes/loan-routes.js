const express = require('express');
const router = express.Router();
const Loan = require('../models/loan-schema');
const { verifyToken } = require('../../user-service/routes/user-routes');

// Crear nuevo préstamo
router.post('/loans', verifyToken, async (req, res) => {
  try {
    const newLoan = new Loan(req.body);

    await newLoan.save();
    res.status(201).send("Préstamo guardado correctamente: ", loan);
  } catch (err) {
    console.error("Error al guardar el préstamo: ", error);
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
