const jwt = require("jsonwebtoken");
const { SECRET } = require("../utils/constants");

exports.auth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ msg: "Failed to authorize" });
    }

    let decodedToken = jwt.verify(token, SECRET);

    if (!decodedToken) {
      return res.status(401).json({ msg: "Failed to authorize" });
    }
    req.email = decodedToken.email; //setting userId to request
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Failed to authorize" });
  }
};
