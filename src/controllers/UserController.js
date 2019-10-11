const User = require('../models/User');

module.exports = {
  async create(req, res) {
    const {username, email, password} = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({username, email, password});
    }

    return res.json(user);
  }
};
