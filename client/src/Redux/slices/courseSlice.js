import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: null,
    course: null,
    courseOwner: null,
  },
  reducers: {
    addCourse: (state, action) => {
      state.courses = [...state.courses, action.payload];
    },

    setCourses: (state, action) => {
      state.courses = action.payload;
    },

    setCourse: (state, action) => {
      state.course = action.payload;
    },

    setOwner: (state, action) => {
      state.courseOwner = action.payload;
    },
  },
});

export const { addCourse, setCourses, setCourse, setOwner } =
  courseSlice.actions;
export default courseSlice.reducer;
