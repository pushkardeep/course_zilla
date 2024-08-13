const userModel = require("../../models/user-model");

// for changing dp
const info = async (req, res) => {
  try {
    const userData = req.user;
    const chunks = [];

    if (!userData) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const user = await userModel.findOne({ email: userData.email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    if (req.file) {
      user.dp = req.file.filename;
    }

    await user.save();

    const downloadStream = gfs.openDownloadStreamByName(user.dp);

    downloadStream.on("error", (err) => {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    });

    downloadStream.on("data", (chunk) => {
      chunks.push(chunk);
    });

    downloadStream.on("end", () => {
      res.status(200).json({
        success: true,
        message: "Userdata updated successfully",
        dp: Buffer.concat(chunks).toString("base64"),
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const profile = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.dp) {
      const downloadStream = gfs.openDownloadStreamByName(user.dp);
      const chunks = [];

      downloadStream.on("error", (err) => {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      });

      downloadStream.on("data", (chunk) => {
        chunks.push(chunk);
      });

      downloadStream.on("end", () => {
        res.status(200).json({
          success: true,
          user: {
            username: user.username,
            email: user.email,
            courses: user.courses,
            followers: user.followers,
            following: user.following,
            dp: Buffer.concat(chunks).toString("base64"),
          },
        });
      });
    } else {
      res.status(200).json({
        success: true,
        user: {
          username: user.username,
          email: user.email,
          courses: user.courses,
          followers: user.followers,
          following: user.following,
        },
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { info, profile };
