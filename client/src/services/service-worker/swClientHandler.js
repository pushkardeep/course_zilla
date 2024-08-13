// Importing action handler functions
import {
  updateVideoProgressHandler,
  videoUploadCompleteHandler,
  videoUploadErrorHandler,
  imageUploadCompleteHandler,
  imageUploadErrorHandler,
} from "./actionHandler";

// Service Worker Client Message Handler
export const handleSWMessages = (dispatch, navigate, courseData) => {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.addEventListener("message", (event) => {
      const { type, ...payload } = event.data;

      switch (type) {
        case "VIDEO_UPLOAD_PROGRESS":
          updateVideoProgressHandler(dispatch, payload.progress);
          break;
        case "VIDEO_UPLOADED":
          videoUploadCompleteHandler(dispatch, payload.secure_url);
          break;
        case "IMAGE_UPLOAD_ERROR":
          imageUploadErrorHandler(dispatch, payload.error);
          break;
        case "IMAGE_UPLOADED":
          imageUploadCompleteHandler(dispatch, payload.image_url);
          break;
        case "VIDEO_UPLOAD_ERROR":
          videoUploadErrorHandler(dispatch, payload.error);
          break;
        case "CREATE_POST":
          createPostHandler(payload, dispatch, navigate, courseData);
          break;
        default:
          console.warn("Unhandled message type:", type);
          break;
      }
    });
  }
};
