const jwt = require("jsonwebtoken");

function generateToken(userId) {
  const secret = process.env.JWT_SECRET || "dev_secret_change_me";
  return jwt.sign({ id: userId }, secret, { expiresIn: "7d" });
}

module.exports = generateToken;

