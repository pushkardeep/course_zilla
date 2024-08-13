const userModel = require("../../models/user-model");
const courseModel = require("../../models/course-model");
const validateUser = require("../../utils/user/validate");
const errorResponse = require("../../utils/error/errorResponse");

const Courses = async (req, res) => {
  try {
    await validateUser(req.user.username);

    const courses = await courseModel.find();
    if (!courses) {
      return errorResponse(res, "Some internal server error.");
    }

    res.status(200).json({ success: true, courses });
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

const video = async (req, res) => {
  try {
    await validateUser(req.user.username);

    const course = await courseModel.findOne({ _id: req.body.id });
    if (!course) {
      return errorResponse(res, "Course not found.");
    }

    if (!course.user) {
      return errorResponse(res, "Something went wrong");
    }

    const user = await userModel.findOne({ _id: course.user });

    if (!user.courses.includes(course._id)) {
      return errorResponse(res, "Something went wrong");
    }

    res.status(200).json({ success: true, course, user });
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

const create = async (req, res) => {
  try {
    const user = await validateUser(req.user.username);

    const { title, description, category, thumbnail_url, video_url } = req.body;
    if (!title || !description || !category || !thumbnail_url || !video_url) {
      return errorResponse(
        res,
        "All fields are required. Please fill all the fields."
      );
    }

    const course = await courseModel.create({
      title,
      description,
      category,
      thumbnail_url,
      video_url,
    });

    user.courses.push(course._id);
    course.user = user._id;
    await user.save();
    await course.save();

    res.status(200).json({
      success: true,
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    errorResponse(res, error.message, 500);
  }
};

module.exports = { Courses, video, create };
