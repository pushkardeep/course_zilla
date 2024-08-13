import {
  setCourseData,
  toggleThumbnailUploading,
  updateVideoProgress,
} from "../../Redux/slices/createCourseSlice";
import { setVideoUploadError } from "../../Redux/slices/errorSlice";
import { errorToast } from "../../utils/toasts";

// Handle video upload progress updates
export const updateVideoProgressHandler = (dispatch, progress) => {
  dispatch(updateVideoProgress(progress));
};

// Handle errors during video upload
export const videoUploadErrorHandler = (dispatch, error) => {
  dispatch(setVideoUploadError(true));
  errorToast(error);
};

export const imageUploadErrorHandler = (dispatch, error) => {
  dispatch(toggleThumbnailUploading(false));
};

export const videoUploadCompleteHandler = (dispatch, url) => {
  dispatch(setCourseData({ video_url: url }));
};

export const imageUploadCompleteHandler = (dispatch, url) => {
  dispatch(setCourseData({ thumbnail_url: url }));
  dispatch(toggleThumbnailUploading(false));
};
