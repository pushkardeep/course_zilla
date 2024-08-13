import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },

    setDp: (state, action) => {
      state.userData = { ...state.userData, dp: action.payload };
    },
  },
});

export const { setUser, setDp } = userSlice.actions;
export default userSlice.reducer;
