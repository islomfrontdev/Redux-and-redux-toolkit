import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = {
  counter: 0,
  showCounter: true,
};
export const countSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = countSlice.actions;
