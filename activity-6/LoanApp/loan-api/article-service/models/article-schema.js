const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  image_url: { type: String }
});

module.exports = mongoose.model('Articles', articleSchema);
