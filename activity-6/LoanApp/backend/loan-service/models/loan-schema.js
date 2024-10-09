const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  article_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
  loan_date: { type: Date, default: Date.now },
  return_date: { type: Date },
  state: { type: String, enum: ['pendiente', 'devuelto', 'atrasado'], default: 'pendiente' }
});

module.exports = mongoose.model('LoanSchema', loanSchema);
