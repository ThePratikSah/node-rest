const jwt = require("jsonwebtoken");
const { SECRET } = require("../utils/constants");

exports.auth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      const error = new Error("Not Authorized");
      error.status = 401;
      return next(error);
    }

    let decodedToken = jwt.verify(token, SECRET);

    if (!decodedToken) {
      const error = new Error("Not Authorized");
      error.status = 401;
      return next(error);
    }
    req.email = decodedToken.email; //setting userId to request
    next();
  } catch (error) {
    return next(error);
  }
};
