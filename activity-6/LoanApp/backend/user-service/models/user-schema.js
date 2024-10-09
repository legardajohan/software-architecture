const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  avatar_url: { type: String }
});

module.exports = mongoose.model('UserSchema', userSchema);
