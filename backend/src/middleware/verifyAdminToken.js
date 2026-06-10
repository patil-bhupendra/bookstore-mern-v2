const jwt = require("jsonwebtoken");
const User = require("../users/user.model");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyAdminToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  console.log(token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.log("JWT VERIFY ERROR:", err);
      return res.status(403).json({
        message: "Invalid credentials",
        error: err.message,
      });
    }

    req.user = user;
    next();
  });
};

module.exports = verifyAdminToken;
