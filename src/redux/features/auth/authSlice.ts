import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: null | object;
  token: null | string;
};

const initialState: InitialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
