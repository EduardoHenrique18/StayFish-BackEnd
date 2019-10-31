const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  bornDate: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  totalValue: {
    type: Number
  }
}, {
    timestamps: true,
  })

const User = mongoose.model('User', userSchema);

module.exports = User;
