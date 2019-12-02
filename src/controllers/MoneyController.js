const Money = require('../models/Money');
const User = require('../models/User');
const _ = require('lodash');

module.exports = {
  async createMoney(req, res) {
    const { value, description, observation, date, idUser, category } = req.body;
    try {

        await Money.create({ value, description, observation, date, idUser, category }).catch(err => {
          console.log(err)
        });

        return res.json('Adicionado!');
    } catch (err) {
      return res.json(err);
    }
  },

  async findMoney(req, res) {
    const { idUser } = req.body;
    try {

      let money = await Money.findOne({ _id :idUser });

      return res.json(money);

    } catch (err) {
      return res.json(err);
    }
  },

  async searchMoneyByDate(req, res) {
    const { idUser, date } = req.body;
    try {
      var days = new Date(date.substring(0,4), date.substring(5,7), 0).getDate();

      var finalDate = date.substring(0,4) + "-" + date.substring(5,7) + "-" + days

      var initialDate = date.substring(0,4) + "-" + date.substring(5,7) + "-" + 1

      let resultado = await Money.find({ date: { $gte: initialDate , $lte: finalDate}, idUser })
      return res.json(resultado);

    } catch (err) {
      return res.json(err);
    }
  },

  async searchMoneyByYear(req, res) {
    const { idUser, year } = req.body;
    try {

      let finalDate = year + "-" + 12 + "-" + 31

      let initialDate = year + "-" + 01 + "-" + 31

      let money = await Money.find({ date: { $gte: initialDate, $lte: finalDate }, idUser })

      let resultado = [];

      async function addItensInArray() {
        for(let i = 0; i <= 11; i++){
        let sum = 0;
        await money.map(result => {
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

  async alterMoney(req, res) {
    const { _id, value, description, date, status, observation, category } = req.body;
    try {

      let resultado = await Money.findByIdAndUpdate({ _id }, {value, description, date, status, observation, category});

      return res.json(resultado);

    } catch (err) {
      return res.json(err);
    }
  }
}


