const userModel = require("../../models/user-model");

const bcrypt = require("bcrypt");

const errorResponse = require("../../utils/error/errorResponse");
const generateToken = require("../../utils/generateToken");

// user create
const create = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return errorResponse(res, "All fields are required");
    }

    const existedUser = await userModel.find({
      $or: [{ username: username }, { email: email }],
    });

    if (existedUser.length > 0) {
      return errorResponse(res, "Username or email is already exist");
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return errorResponse(res, "Some Server Error");
      }

      const user = await userModel.create({
        username: username,
        email,
        password: hash,
      });

      if (!user) {
        errorResponse(res, "Some Server Error");
      }

      const token = generateToken(email, res);
      res.status(200).json({ success: true, token });
    });
  } catch (error) {
    errorResponse(res, "Some Server Error", 500);
  }
};

// user login
const log_in = async (req, res) => {
  try {
    const { email, password } = req.body;
    // checks if any field is empty or not
    if (!email || !password) {
      return errorResponse(res, "All fields are required");
    }

    // finding user
    const user = await userModel.findOne({
      email,
    });

    //  check if user is exists or not
    if (!user) {
      return errorResponse(res, "Email or Password is Incorrect");
    }

    // check if user's password is correct or not
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return errorResponse(res, "Some Server Error");
      }

      if (!result) {
        return errorResponse(res, "Email or Password is Incorrect");
      }
      const token = generateToken(email, res);
      res.status(200).json({ success: true, token });
    });
  } catch (error) {
    return errorResponse(res, "Some Server Error", 500);
  }
};

module.exports = { create, log_in };
