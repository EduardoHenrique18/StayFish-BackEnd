const User = require('../models/User');
const Payment = require('../models/Payment');
const Money = require('../models/Money');

module.exports = {
  async create(req, res) {
    const { name, email, password, bornDate } = req.body;
    try {

      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({ name, email, password, bornDate });
      }

      return res.json(user);

    } catch (error) {
      return res.json({ message: error });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user.email == email && user.password == password) {
        user.password = undefined;
        return res.json(user);
      } else {
        throw new Error();
      }

    } catch (error) {
      return res.json({ message: 'Usuario não encontrado, verifique seu email ou senha.' })
    }
  },

  async balance(req, res) {
    const { idUser } = req.body;
    try {
      var positive = new Number();
      var negative = new Number();

      await Payment.find({ idUser, status: 1 }).then(result => {
        result.map(res => {
          if (res.status.valueOf() == 1) {
            negative += parseInt(res.value);
          }
        })
      }).catch(err => {
        console.log(err)
      });

      await Money.find({ idUser }).then(result => {
        result.map(res => {
            positive += parseInt(res.value);
        })
      });

      return res.json({sum: positive-negative})
    } catch (error) {
      return res.json(error)
    }
  }
};
