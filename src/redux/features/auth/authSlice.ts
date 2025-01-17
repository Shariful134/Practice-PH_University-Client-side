import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
type InitialState = {
  user: null | TUser;
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
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
