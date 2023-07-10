import { configureStore } from "@reduxjs/toolkit";
import global from "./state/globalSlice";

export const store = configureStore({
  reducer: {
    global,
  },
});