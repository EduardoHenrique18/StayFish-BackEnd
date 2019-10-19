const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    value: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        trim: true
      },
      paymentDate: {
        type: Date,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      observation: {
        type: String,
        trim: true
      },
      idUser: {
          type: String,
          required: true
      },
      category: {
          type: String,
          required: true,
          trim: true
      }
    }, {
        timestamps: true,
      })

const payment = mongoose.model('Payment', paymentSchema);

module.exports = payment;
