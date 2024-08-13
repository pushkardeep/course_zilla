const jwt = require("jsonwebtoken");

const generateToken = (email, res) => {
  try {
    return jwt.sign({ email }, process.env.SECRET);
  } catch (error) {
    return res.status(400).json({ message: "Token generating error" });
  }
};

module.exports = generateToken;
