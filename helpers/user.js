const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../utils/constants");

exports.newUser = async (req) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      const data = new User(req.body);
      user = await data.save();
    }

    return jwt.sign({ email }, SECRET);
  } catch (error) {
    console.log(error);
  }
};
