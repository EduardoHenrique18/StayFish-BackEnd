const paymentModel = require('../models/Payment');

module.exports = {
    async create(req, res) {
        const { value, description, paymentDate, status, observation, idUser, category } = req.body;

        let payment = await findOne({ idUser });

        if (!payment) {
            payment = await paymentModel.create({ value, description, paymentDate, status, observation, category })
        }

        return res.json(payment);
    }
}