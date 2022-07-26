const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  address: [
    {
      pinCode: String,
      city: String,
      state: String,
      street: String,
      landmark: String,
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
