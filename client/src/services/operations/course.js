import endPoints from "../apis";
import sendRequest from "../../utils/fetch";
import { errorToast, successToast } from "../../utils/toasts";
import {
  addCourse,
  setCourse,
  setCourses,
  setOwner,
} from "../../Redux/slices/courseSlice";
import {
  removeCourseData,
  isImageFileSelected,
  isVideoFileSelected,
  setVideoUploader,
  updateVideoProgress,
  setPermissionToCreate,
  setLoading,
} from "../../Redux/slices/createCourseSlice";

// Utility function to reset course data
const resetCourse = (dispatch) => {
  dispatch(setLoading(false));
  dispatch(setVideoUploader(true));
  dispatch(removeCourseData());
  dispatch(updateVideoProgress(null));
  dispatch(isVideoFileSelected(false));
  dispatch(isImageFileSelected(false));
  dispatch(setPermissionToCreate(false));
};

const handleErrors = (navigate, dispatch, message) => {
  localStorage.removeItem("token");
  errorToast(message);
  navigate("/error");
};

const handleResponse = (response, dispatch, navigate) => {
  if (!response.success) {
    handleErrors(
      navigate,
      dispatch,
      response.message || "Something went wrong"
    );
    return false;
  }
  return true;
};

export const getCourses = async (navigate, dispatch, token) => {
  try {
    const response = await sendRequest(
      undefined,
      endPoints.GET_COURSES_API,
      "POST",
      token
    );

    if (!handleResponse(response, dispatch, navigate)) return;
    dispatch(setCourses(response.courses));
  } catch (error) {
    handleErrors(navigate, dispatch, "Something went wrong");
  }
};

export const video = async (id, dispatch, navigate, token) => {
  try {
    const response = await sendRequest(
      { id },
      endPoints.GET_VIDEO_API,
      "POST",
      token
    );

    if (!handleResponse(response, dispatch, navigate)) return;
    dispatch(setCourse(response.course));
    dispatch(setOwner(response.user));
  } catch (error) {
    handleErrors(navigate, dispatch, "Something went wrong");
  }
};

export const create = async (courseData, dispatch, navigate, token) => {
  try {
    const { title, description, category, video_url, thumbnail_url } =
      courseData;

    if (!title || !description || !category || !video_url || !thumbnail_url) {
      errorToast("All fields are required.");
      return;
    }

    dispatch(setLoading(true));

    const response = await sendRequest(
      courseData,
      endPoints.CREATE_POST_API,
      "POST",
      token
    );

    if (!handleResponse(response, dispatch, navigate)) {
      resetCourse(dispatch);
      return;
    }

    successToast(response.message);
    dispatch(addCourse(response.course));
    resetCourse(dispatch);
  } catch (error) {
    resetCourse(dispatch);
    handleErrors(navigate, dispatch, "Something went wrong");
  }
};
