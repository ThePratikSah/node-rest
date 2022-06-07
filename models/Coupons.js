const mongoose = require("mongoose");

const couponSchema = mongoose.Schema({
  code: String,
  type: String,
  amount: Number,
  image_url: String,
});

module.exports = mongoose.model("coupon", couponSchema);
