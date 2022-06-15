const mongoose = require("mongoose");

const couponSchema = mongoose.Schema({
  code: String,
  description: String,
  type: String,
  amount: Number,
  minCart: Number,
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("coupon", couponSchema);
