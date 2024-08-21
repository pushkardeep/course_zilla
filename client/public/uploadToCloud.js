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
const handleUploadRequest = async (formData, headers, cloudName) => {
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
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
const uploadToCloud = async (
  cloudName,
  formData,
  uniqueName,
  contentRange = undefined
) => {
  const headers = prepareHeaders(uniqueName, contentRange);
  return await handleUploadRequest(formData, headers, cloudName);
};

self.uploadToCloud = uploadToCloud;
