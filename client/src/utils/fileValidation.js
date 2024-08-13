export const videoValidation = (file) => {
  try {
    const sizeLimit = 200 * 1024 * 1024; // 200mb

    if (!file) {
      return { isValid: false, message: "please select a file" };
    }

    if (file.size > sizeLimit) {
      return { isValid: false, message: "Video file must be less than 200mb." };
    }

    if (!file.type.startsWith("video/") && file.type !== "video/mp4") {
      return {
        isValid: false,
        message: 'Please select a valid "mp4" video file.',
      };
    }

    return { isValid: true };
  } catch (error) {
    return {
      isValid: false,
      message: "Something went wrong, please try again or reload the page.",
    };
  }
};

export const imageValidation = (file) => {
  try {
    const sizeLimit = 5 * 1024 * 1024; // 5mb

    if (!file) {
      return { isValid: false, message: "please select a file" };
    }

    if (
      !file.type.startsWith("image/") ||
      !["image/jpeg", "image/jpg"].includes(file.type)
    ) {
      return {
        isValid: false,
        message: 'Please select a valid "jpg" or "jpeg" image file.',
      };
    }

    if (file.size > sizeLimit) {
      return { isValid: false, message: "Image file must be less than 5mb." };
    }

    return { isValid: true };
  } catch (error) {
    return {
      isValid: false,
      message: "Something went wrong, please try again or reload the page.",
    };
  }
};
