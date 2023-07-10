import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    global: sessionStorage.getItem('global') ? sessionStorage.getItem('global') : 'INICIO',
  },
  reducers: {
    setActivePage: (state, action) => {
      state.global = action.payload;
      sessionStorage.setItem('global', action.payload)
    }
  },
});

export const { setActivePage } = globalSlice.actions;

export default globalSlice.reducer;