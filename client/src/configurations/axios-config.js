import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const setContentType = (contentType) => {
  axiosInstance.defaults.headers.common["Content-Type"] = contentType;
};

export default axiosInstance;
