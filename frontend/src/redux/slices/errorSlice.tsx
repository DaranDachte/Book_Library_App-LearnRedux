import { createSlice } from "@reduxjs/toolkit";

interface ErrorState {
  message: string;
}

const initialState = "";

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (_state, action) => {
      return action.payload;
    },
    clearError: () => {
      return initialState;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export const selectErrorMessage = (state: { error: ErrorState }) => state.error;

export default errorSlice.reducer;
