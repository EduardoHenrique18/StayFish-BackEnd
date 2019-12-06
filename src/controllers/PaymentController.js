const Payment = require('../models/Payment');
const _ = require('lodash');
const moment = require('moment');

module.exports = {
    async createPayment(req, res) {
        try {
            const { value, description, paymentDate, status, observation, idUser, category } = req.body;
    
            let payment = await Payment.findOne({ idUser });
            
            if(_.isNull(payment)) payment = await Payment.create({ value, description, paymentDate, status, observation, idUser, category });
            
            return res.json('Pagamento Realizado com Sucesso!');

        } catch (err) {
            return err;
        }
    },
    async serchPayment(req, res) {
        try {
            const { idUser } = req.body;
            const payment = [];

            let request = await Payment.findOne({ idUser });
    
            if(_.isNull(request)) return res.json('Este usuário não está cadastrado!');

            payment.push({
                Value: request.value,
                PaymentDate: moment(request.paymentDate).format('DD/MM/YYYY'),
                Description: request.description,
                Status: request.status,
                Category: request.category,
                Observation: request.observation,
            });
            return res.json(payment);
        } catch(err) {
            return err;
        }
    }
}