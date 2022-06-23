import ModalPortal from "./modal/ModalPortal";
import Modal from "./modal/Modal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import {
//   showModal1,
//   showModal2,
//   showModal3,
// } from "./store/actions/modalAction";
// import { showModal } from "./store/actions/modalAction";
import { showModal } from "./store/slice/modalSlice";

const Test = () => {
  const dispatch = useDispatch();

  const handleButton = (e) => {
    dispatch(showModal(e.target.dataset.num));
  };

  return (
    <div>
      <button onClick={handleButton} data-num={1}>
        모달창1
      </button>
      <button onClick={handleButton} data-num={2}>
        모달창2
      </button>
      <button onClick={handleButton} data-num={3}>
        모달창3
      </button>
    </div>
  );
};

export default Test;
