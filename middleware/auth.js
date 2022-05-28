const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      const error = new Error("Not Authorized");
      error.status = 401;
      next(error);
    }

    const token = authHeader.split(" ")[1];
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, "somesecret");
    } catch (error) {
      error.status = 500;
      error.message = "Failed to verify token";
      next(error);
    }
    if (!decodedToken) {
      const error = new Error("Not Authorized");
      error.status = 401;
      next(error);
    }
    req.email = decodedToken.email; //setting userId to request
    next();
  } catch (error) {
    throw new Error("Failed to verify");
  }
};
