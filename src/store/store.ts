import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import uploadReducer from "../store/slices/upload";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    upload: uploadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
