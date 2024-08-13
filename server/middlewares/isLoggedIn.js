const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).json({ message: "Token is not defined" });
    }

    jwt.verify(token, process.env.SECRET, async (err, result) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      const user = await userModel.findOne({ email: result.email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({ meassage: error.meassage });
  }
};

module.exports = isLoggedIn;
