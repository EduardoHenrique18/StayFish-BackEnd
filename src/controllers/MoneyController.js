const Money = require('../models/User');
const _ = require('lodash');

module.exports = {
  async createMoney(req, res) {
    const { value, description, status, observation, idUser, category } = req.body;
    try {

      let money = await Money.findOne({ idUser });

      if (_.isNull(money)) money = await Money.create({ value, description, status, observation, category });
      return res.json('saldo adicionado com sucesso!');

    } catch (error) {
        console.log(error);
      return res.json({ message: error });
    }
  },

  async findMoney(req, res) {
      const { idUser } = req.body;
    try {
        const arrayMoney = [];
        let money = await Money.findOne({ idUser });
        console.log(money);

        _.map(money, (balance) => {
            arrayMoney.push({
                value: balance.value,
                description: balance.description,
                observation: balance.observation,
            });
        });
        
        if (_.isNull(money)) return 'este usuario nao possui saldo';
        return arrayMoney;
    } catch(err) {
        console.log(err);
        return err;
    }
  }
}