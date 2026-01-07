import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slice/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
