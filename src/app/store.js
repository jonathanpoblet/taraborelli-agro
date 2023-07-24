import { configureStore } from "@reduxjs/toolkit";
import global from "./state/globalSlice";
import products from "./state/productsSlice";

export const store = configureStore({
  reducer: {
    global,
    products
  },
});