const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      return console.log("Some DB Error", err);
    });
};

module.exports = connectDB;
