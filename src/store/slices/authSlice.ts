import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../../interfaces/auth";

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupStart(state) {
      state.loading = true;
      state.error = null;
    },
    signupSuccess(state) {
      state.loading = false;
      // state.user = action.payload;
    },
    // signupFailure(state, action: PayloadAction<string>) {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const { signupStart, signupSuccess, loginStart, loginSuccess } =
  authSlice.actions;
export default authSlice.reducer;
