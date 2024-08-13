import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseData: {
    title: null,
    description: null,
    category: null,
    video_url: null,
    thumbnail_url: null,
  },
  isVideoUploaderActive: true,
  videoUploadProgress: null,
  isThumbnailUploading: false,
  isVideoFileSelected: false,
  isImageFileSelected: false,
  isPermissionToCreate: false,
  isLoading: false,
};

const reducers = {
  setCourseData: (state, action) => {
    state.courseData = { ...state.courseData, ...action.payload };
  },

  removeCourseData: (state, action) => {
    state.courseData = {
      title: null,
      description: null,
      category: null,
      video_url: null,
      thumbnail_url: null,
    };
  },

  setVideoUploader: (state, action) => {
    state.isVideoUploaderActive = action.payload;
  },

  isImageFileSelected: (state, action) => {
    state.isImageFileSelected = action.payload;
  },

  isVideoFileSelected: (state, action) => {
    state.isVideoFileSelected = action.payload;
  },

  updateVideoProgress: (state, action) => {
    state.videoUploadProgress = action.payload;
  },

  toggleThumbnailUploading: (state, action) => {
    state.isThumbnailUploading = action.payload;
  },

  setPermissionToCreate: (state, action) => {
    state.isPermissionToCreate = action.payload;
  },

  setLoading: (state, action) => {
    state.isLoading = action.payload;
  },
};

const createCourseSlice = createSlice({
  name: "createCourse",
  initialState,
  reducers,
});

export const {
  setCourseData,
  removeCourseData,
  setVideoUploader,
  isImageFileSelected,
  isVideoFileSelected,
  updateVideoProgress,
  toggleThumbnailUploading,
  setPermissionToCreate,
  setLoading,
} = createCourseSlice.actions;
export default createCourseSlice.reducer;
