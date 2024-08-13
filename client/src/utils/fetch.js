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

export default sendRequest;
