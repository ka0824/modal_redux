import React, { useCallback, useRef, useEffect } from "react";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import { useSelector } from "react-redux/es/exports";
import styled from "styled-components";

const ModalBackground = () => {
  const modalNum = useSelector((state) =>
    parseInt(state.modalReducer.modalNumber)
  );

  const renderModal = useCallback(() => {
    switch (modalNum) {
      case 0:
        return null;

      case 1:
        return <Modal></Modal>;

      case 2:
        return <Modal2></Modal2>;

      case 3:
        return <Modal3></Modal3>;

      default:
        return null;
    }
  }, [modalNum]);

  return <Wrapper>{renderModal()}</Wrapper>;
};

const Wrapper = styled.div``;

export default React.memo(ModalBackground);
