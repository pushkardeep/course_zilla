import endPoints from "../../services/apis";

import sendRequest from "../../utils/fetch";

import { toggleSpinner } from "../../Redux/slices/uiSlice";
import { errorToast, successToast } from "../../utils/toasts";

const handleError = (dispatch) => {
  dispatch(toggleSpinner(false));
  errorToast("Some server error");
};

const handleResponse = (response, navigate, message) => {
  if (!response.success) {
    return errorToast(response.message);
  }

  localStorage.setItem("token", response.token);
  navigate("/feed");
  successToast(message);
};

const signUp = async (formData, navigate, dispatch) => {
  try {
    dispatch(toggleSpinner(true));
    const response = await sendRequest(
      formData,
      endPoints.REGISTER_API,
      "POST"
    );
    dispatch(toggleSpinner(false));

    handleResponse(response, navigate, "User created successfully");
  } catch (error) {
    handleError(dispatch);
  }
};

const signIn = async (formData, navigate, dispatch) => {
  try {
    dispatch(toggleSpinner(true));
    const response = await sendRequest(formData, endPoints.LOG_IN_API, "POST");
    dispatch(toggleSpinner(false));

    handleResponse(response, navigate, "Authentication successfull");
  } catch (error) {
    handleError(dispatch);
  }
};

export { signUp, signIn };
