import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    videoUploadError: null,
    thumbnailUploadError: null,
  },
  reducers: {
    setVideoUploadError: (state, action) => {
      state.videoUploadError = action.payload;
    },

    setThumbnailUploadError: (state, action) => {
      state.thumbnailUploadError = action.payload;
    },
  },
});

export const { setVideoUploadError, setThumbnailUploadError } =
  errorSlice.actions;
export default errorSlice.reducer;
