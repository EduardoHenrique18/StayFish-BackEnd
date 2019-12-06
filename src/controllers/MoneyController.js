const moment = require('moment');
const _ = require('lodash');
const Money = require('../models/Money');

module.exports = {
    async createMoney(req, res) {
        try {
            const { value, description, moneyDate, status, observation, idUser, category } = req.body; 

            let money = await Money.findOne({ idUser });

            if(_.isNull(money)) money = await Money.create({ value, description, moneyDate, status, observation, idUser, category });

            return res.json('Saldo Adicionado com Sucesso!');
        } catch(err) {
            return err;
        }
    },
    async searchMoney(req, res) {
        try {
            const { idUser } = req.body;
            const money = [];

            let request = await Money.findOne({ idUser }); 

            if (_.isNull(request)) return res.json('Saldo Não encontrado!');

            money.push({
                Value: request.value,
                Description: request.description,
                Date: moment(request.moneyDate).format('DD/MM/YYYY'),
                Status: request.status,
                Observation: request.observation,
                Category: request.category,
            });
            return res.json(money);
        } catch(err) {
            return err;
        }
    }
}