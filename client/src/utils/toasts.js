import { toast } from "react-toastify";

export const errorToast = (message) => {
  toast(message, {
    type: "error",
    position: "top-center",
  });
};

export const successToast = (message) => {
  toast(message, {
    type: "success",
    position: "top-center",
  });
};

export const infoToast = (message) => {
  toast(message, {
    type: "info",
    position: "top-center",
  });
};
