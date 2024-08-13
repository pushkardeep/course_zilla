import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  isSpinner: false,
  isMenu: false,
};

// Slice
const uiSlice = createSlice({
  name: "userInterface",
  initialState,
  reducers: {
    toggleSpinner: (state, action) => {
      state.isSpinner = action.payload;
    },

    toggleMenu: (state, action) => {
      state.isMenu = action.payload;
    },
  },
});

// Export actions and reducer
export const { toggleMenu, toggleSpinner } = uiSlice.actions;

export default uiSlice.reducer;
