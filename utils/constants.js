require("dotenv").config();

const { PORT = 8080 } = process.env;
const { SECRET } = process.env;

module.exports = { PORT, SECRET };
