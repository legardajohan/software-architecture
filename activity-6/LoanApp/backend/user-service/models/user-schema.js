const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  avatar_url: { type: String }
});

                // (nombre de la colección, nombre del esquema);
module.exports = mongoose.model('Users', userSchema);
