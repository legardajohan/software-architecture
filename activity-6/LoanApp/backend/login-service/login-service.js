// const express = require('express'); // ya
// const bcrypt = require('bcryptjs'); // ya en routes
// const jwt = require('jsonwebtoken'); // ya en routes
// const User = require('./models/User'); // ya

// const router = express.Router();
// const secretKey = 'mySuperSecretKey'; // Clave secreta para generar el token

// // Registro de usuarios
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;
  
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });
    
//     await newUser.save();
//     res.status(201).json({ message: 'Usuario registrado con éxito' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error al registrar el usuario' });
//   }
// });

// // Login de usuarios
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) return res.status(401).json({ error: 'Contraseña incorrecta' });

//     const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: 'Error al iniciar sesión' });
//   }
// });

// // Middleware para verificar el JWT
// const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token) return res.status(403).json({ error: 'No token provided' });

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) return res.status(500).json({ error: 'Failed to authenticate token' });
//     req.userId = decoded.userId;
//     next();
//   });
// };

// module.exports = { router, verifyToken };
