const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      const error = new Error("Not Authorized");
      error.status = 401;
      return next(error);
    }

    const token = authHeader.split(" ")[1];
    let decodedToken;

    decodedToken = jwt.verify(token, "somesecret");
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
