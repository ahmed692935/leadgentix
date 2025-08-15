// src/redux/fileUploadSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FileUploadState } from "../../interfaces/upload";

const initialState: FileUploadState = {
  loading: false,
  success: false,
  error: null,
};

const fileUploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    uploadStart(state) {
      state.loading = true;
      state.error = null;
    },
    uploadSuccess(state, action: PayloadAction<boolean>) {
      state.loading = false;
      state.success = action.payload;
    },
  },
});

export const { uploadStart, uploadSuccess } = fileUploadSlice.actions;
export default fileUploadSlice.reducer;
