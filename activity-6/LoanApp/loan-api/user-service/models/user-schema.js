const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  avatar_url: { type: String }
});

// Middleware de Mongoose para cifrar la contraseña antes de guardarla
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    // Cifrado de la contraseña
    console.log('Bcrypt schema: ', this.password);
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    console.log('Password ya encriptada: ', this.password);
    next();
  } catch (error) {
    return next(error);
  }
});

// Método para comparar contraseñas durante el login
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

                // (nombre de la colección, nombre del esquema);
module.exports = mongoose.model('Users', userSchema);
