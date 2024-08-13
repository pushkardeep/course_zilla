const userModel = require("../../models/user-model");

const validateUser = async (username) => {
  const user = await userModel.findOne({ username });
  if (!user) {
    throw new Error("User not found.");
  }
  return user;
};

module.exports = validateUser;
