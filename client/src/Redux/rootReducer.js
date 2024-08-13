import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import createCourseSlice from "./slices/createCourseSlice";
import courseSlice from "./slices/courseSlice";
import uiSlice from "./slices/uiSlice";
import errorSlice from "./slices/errorSlice";

export const rootReducer = combineReducers({
  user: userSlice,
  createCourse: createCourseSlice,
  courses: courseSlice,
  ui: uiSlice,
  error: errorSlice,
});
