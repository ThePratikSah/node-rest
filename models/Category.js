const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: String,
  image_url: String,
});

module.exports = mongoose.model("category", categorySchema);
