const mongoose = require("mongoose");

const couponSchema = mongoose.Schema({
  code: String,
  description: String,
  type: String,
  amount: Number,
  minCart: Number,
});

module.exports = mongoose.model("coupon", couponSchema);
