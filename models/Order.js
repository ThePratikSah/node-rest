const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  products: [
    {
      productId: String,
      quantity: {
        type: Number,
        default: 1,
      },
      price: Number,
      name: String,
    },
  ],
  amount: {
    type: Number,
    required: true,
  },
  address: Object,
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("order", orderSchema);
