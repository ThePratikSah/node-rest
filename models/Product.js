const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  selling_price: Number,
  image_url: String,
  description: String,
  category: String,
  createdAt: Date,
  is_available: Boolean,
  prescriptionRequired: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("product", productSchema);
