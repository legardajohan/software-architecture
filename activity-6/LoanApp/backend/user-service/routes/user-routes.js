const express = require('express');
const router = express.Router();
const User = require('../models/user-schema');

// Crear nuevo usuario
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save(); 
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtener todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
