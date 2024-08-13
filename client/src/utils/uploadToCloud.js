// Prepare headers for the upload request
const prepareHeaders = (uniqueName, contentRange) => {
  const headers = {
    "X-Unique-Upload-Id": uniqueName,
  };

  if (contentRange) {
    headers["Content-Range"] = contentRange;
  }

  return headers;
};

// Handle the upload request to Cloudinary
const handleUploadRequest = async (formData, headers) => {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUD_NAME
      }/auto/upload`,
      {
        method: "POST",
        body: formData,
        headers: headers,
      }
    );

    if (!response.ok) {
      return {
        success: false,
        message: "Something went wrong. Please try again later.",
      };
    }

    return await response.json();
  } catch (error) {
    return {
      success: false,
      message: error.message || "An unexpected error occurred during upload",
    };
  }
};

// Upload to Cloudinary with appropriate headers and error handling
export const uploadToCloud = async (
  formData,
  uniqueName,
  contentRange = undefined
) => {
  const headers = prepareHeaders(uniqueName, contentRange);
  return await handleUploadRequest(formData, headers);
};
