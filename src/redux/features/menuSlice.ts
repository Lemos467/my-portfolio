import { createSlice } from "@reduxjs/toolkit";
import { MenuState } from "@typings/reduxTypes";

const initialState: MenuState = { isOpen: false };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
