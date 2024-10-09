const express = require('express');
const router = express.Router();
const Loan = require('../models/loan-schema');

// Crear nuevo préstamo
router.post('/loans', async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).send(loan);
  } catch (err) {
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
