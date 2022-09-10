require("dotenv").config();

const { PORT = 8080 } = process.env;
const SECRET = process.env.SECRET;

module.exports = { PORT, SECRET };
