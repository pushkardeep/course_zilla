import endPoints from "../apis";
import fetch from "../../utils/fetch";
import { toggleSpinner } from "../../Redux/slices/uiSlice";
import { setUser, setDp } from "../../Redux/slices/userSlice";

const getProfile = async (navigate, dispatch, token) => {
  try {
    dispatch(toggleSpinner(true));
    const response = await fetch(
      undefined,
      endPoints.PROFILE_API,
      "POST",
      token
    );
    dispatch(toggleSpinner(false));
    if (response.success) {
      dispatch(setUser(response.user));
    } else {
      navigate("/error");
    }
  } catch (error) {
    dispatch(toggleSpinner(false));
    navigate("/error");
  }
};

// for changing dp
const info = async (formData, navigate, dispatch, token) => {
  try {
    dispatch(toggleSpinner(true));
    const response = await fetch(
      formData,
      endPoints.INFO_API,
      "POST",
      token,
      "multipart/form-data"
    );
    dispatch(toggleSpinner(false));
    if (response.success) {
      dispatch(setDp(response.dp));
      return { success: true, message: response.message };
    } else {
      return { success: false };
    }
  } catch (error) {
    dispatch(toggleSpinner(false));
    navigate("/error");
    return { success: false };
  }
};

export { getProfile, info };
