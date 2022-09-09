import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { countSlice } from "./counter";

const store = configureStore({
  reducer: {
    counter: countSlice.reducer,
    auth: authSlice.reducer,
  },
});
export default store;
