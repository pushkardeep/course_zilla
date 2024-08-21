import axiosInstance, { setContentType } from "../configurations/axios-config";

const sendRequest = async (
  formData = undefined,
  endPoint,
  method,
  token = undefined,
  contentType = "application/json"
) => {
  try {
    setContentType(contentType);
    const response = await axiosInstance({
      url: endPoint,
      method: method,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const upload = async (formData, uniqueName) => {
  try {
    const headers = {
      "X-Unique-Upload-Id": uniqueName,
    };

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUD_NAME
      }/auto/upload`,
      {
        method: "POST",
        body: formData,
        headers,
      }
    );

    if (!response.ok) {
      return {
        success: false,
        message: "Something went wrong!",
      };
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "An unexpected uploadation error",
    };
  }
};

export default sendRequest;
