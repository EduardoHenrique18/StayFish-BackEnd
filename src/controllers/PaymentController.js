const Payment = require('../models/Payment');
const _ = require('lodash');

module.exports = {
    async createPayment(req, res) {
        try {
            const { value, description, paymentDate, status, observation, idUser, category } = req.body;
    
            let payment = await Payment.findOne({ idUser });
            
            if(_.isNull(payment)) payment = await Payment.create({ value, description, paymentDate, status, observation, idUser, category });
            
            return res.json('Pagamento Realizado com Sucesso!');

        } catch (err) {
            console.log(err);
            return err;
        }
    },
    async serchPayment(req, res) {
        try {
            const { idUser } = req.body;

            let request = await Payment.find({ idUser });

            if(_.isNull(request)) return res.json('Este usuário não está cadastrado!');

            return res.json(request);
        } catch(err) {
            return err;
        }
    }
}