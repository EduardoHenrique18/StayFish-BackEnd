const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moneySchema = new Schema({
  value: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  observation: {
    type: String,
    trim: true,
  },
  idUser: {
    type: String,
    required: true
  },
  category: {
    type: String,
  },
}, {
    timestamps: true,
  })

const Money = mongoose.model('Money', moneySchema);

module.exports = Money;
