import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  input: ""
};

const addInputSlice = createSlice({
  name: "addInput",
  initialState,
  reducers: {
    inputAdded(state, action) {
      const input = action.payload;
      console.log("action-->", action);
      state.input = input;
      return state;
    }
  }
});

export const { inputAdded } = addInputSlice.actions;

export default addInputSlice.reducer;
