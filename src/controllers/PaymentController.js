const Payment = require('../models/Payment');
const User = require('../models/User');
const _ = require('lodash');

module.exports = {
  async createPayment(req, res) {
    const { value, description, date, status, observation, idUser, category } = req.body;
    try {

      let user = await User.findOne({ _id : idUser });
      console.log(user)
      console.log(value + "" + description + "" + date + "" + status + "" + observation + "" + category + "" + idUser)
      if (user) {
        await Payment.create({ value, description, date, status, observation, idUser, category }).catch(err => {
          console.log(err)
        });

        return res.json('Adicionado!');
      } else {
        return res.json('Usuario não existente');
      }
    } catch (err) {
      return res.json(err);
    }
  },

  async searchPayment(req, res) {
    const { idUser } = req.body;
    try {

      let payment = await Payment.find({ _id :idUser });

      return res.json(payment);

    } catch (err) {
      return res.json(err);
    }
  },

  async searchPaymentByDate(req, res) {
    const { idUser, date } = req.body;
    try {
      var days = new Date(date.substring(0, 4), date.substring(5, 7), 0).getDate();

      var finalDate = date.substring(0, 4) + "-" + date.substring(5, 7) + "-" + days

      var initialDate = date.substring(0, 4) + "-" + date.substring(5, 7) + "-" + 1

      let resultado = await Payment.find({ date: { $gte: initialDate, $lte: finalDate }, idUser })
      return res.json(resultado);

    } catch (err) {
      return res.json(err);
    }
  },

  async searchPaymentByYear(req, res) {
    const { idUser, year } = req.body;
    try {

      let finalDate = year + "-" + 12 + "-" + 31

      let initialDate = year + "-" + 01 + "-" + 31

      let payments = await Payment.find({ date: { $gte: initialDate, $lte: finalDate }, idUser })

      let resultado = [];

      async function addItensInArray() {
        for(let i = 0; i <= 11; i++){
        let sum = 0;
        await payments.map(result => {
          if (result.date.getMonth() === i) {
             sum += parseInt(result.value);
          }
        })
        resultado.push(sum);
      }}

      await addItensInArray();

      return res.json(resultado);

    } catch (err) {
      return res.json(err);
    }
  },

  async alterPayment(req, res) {
    const { _id, value, description, Date, status, observation, category } = req.body;
    try {

      let resultado = await Payment.findByIdAndUpdate({ _id }, { value, description, Date, status, observation, category });

      return res.json(resultado);

    } catch (err) {
      return res.json(err);
    }
  },
}
