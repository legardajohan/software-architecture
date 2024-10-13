const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user-schema');

const secretKey = 'mySuperSecretKey'; // Clave secreta para generar el token

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

// Registro de usuarios
router.post('/register', async (req, res) => {
  const { name, email, password, phone, avatar_url } = req.body;
  
  try {
    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario con la contraseña cifrada
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      avatar_url
    });
    
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Login de usuarios
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Datos recibidos del front: ", req.body);

  try {
    const user = await User.findOne({ email });
    console.log("Usuario encontrado: ", user);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    // Comparar la constraseña ingresada con la almacenada
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Contraseña incorrecta' });

    // Generar el token JWT 
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

// Middleware para verificar el JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided' });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(500).json({ error: 'Failed to authenticate token' });
    req.userId = decoded.userId;
    next();
  });
};

module.exports = { router, verifyToken };
