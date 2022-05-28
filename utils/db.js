const mongoose = require("mongoose");

const conn = mongoose.connect(
  "mongodb+srv://pratik_sah:8709105800@crud-demo.lxqgv.mongodb.net/medstore"
);

module.exports = conn;
