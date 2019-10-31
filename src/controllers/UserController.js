const User = require('../models/User');

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
        console.log('entrou')
        user.password = undefined;
        return res.json(user);
      } else {
        throw new Error();
      }

    } catch (error) {
      return res.json({ message: 'Usuario não encontrado, verifique seu email ou senha.' })
    }
  }
};
