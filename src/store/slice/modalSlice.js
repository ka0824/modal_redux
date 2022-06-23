import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalNumber: 0,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action) {
      state.modalNumber = action.payload;
    },
    closeModal(state, action) {
      state.modalNumber = 0;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
