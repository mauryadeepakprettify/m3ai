import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsModal: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsModal } = modalSlice.actions;
export default modalSlice.reducer;
