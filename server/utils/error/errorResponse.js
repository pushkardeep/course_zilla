const errorResponse = (res, message, status = 400) => {
  return res.status(status).json({ success: false, message });
};

module.exports = errorResponse;
