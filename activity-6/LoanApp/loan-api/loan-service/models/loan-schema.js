const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  article_id: { type: String, required: true },
  loan_date: { type: Date, default: Date.now },
  return_date: { type: Date },
  state: { type: String, enum: ['Pendiente', 'Devuelto', 'Atrasado'], default: 'Pendiente' }
});

module.exports = mongoose.model('Loans', loanSchema);
