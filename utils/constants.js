require("dotenv").config();

const { PORT = 8080 } = process.env;

module.exports = PORT;
