import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/slice/modalSlice";

const Modal3 = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeModal());
  };

  const modalRef = useRef(null);

  const posX = useRef(0);
  const posY = useRef(0);

  const handleDragEnd = (event) => {
    if (event.screenX === 0) {
      return;
    }

    if (
      event.nativeEvent.offsetX >= event.clientX ||
      event.nativeEvent.offsetY >= event.clientY ||
      event.clientX + (event.target.offsetWidth - event.nativeEvent.offsetX) >=
        window.innerWidth ||
      event.clientY + (event.target.offsetHeight - event.nativeEvent.offsetY) >=
        window.innerHeight
    ) {
      event.target.style.top = `50%`;
      event.target.style.left = `50%`;
    }
  };

  const handleDragStart = (event) => {
    const img = new Image();
    event.dataTransfer.setDragImage(img, 0, 0);

    posX.current = event.clientX;
    posY.current = event.clientY;
  };

  const handleDrag = (event) => {
    if (event.screenX === 0) {
      return;
    }

    // event.nativeEvent.offsetX > event.clientX

    let topLimit;
    let bottomLimit;
    let leftLimit;
    let rightLimit;

    if (event.nativeEvent.offsetX >= event.clientX) {
      leftLimit = event.target.offsetLeft + event.clientX - posX.current;

      event.target.style.left = `${leftLimit + 5}px`;
      event.target.style.top = `${
        event.target.offsetTop + event.clientY - posY.current
      }px`;
      posY.current = event.clientY;
      posX.current = event.clientX;
    }

    if (event.nativeEvent.offsetY >= event.clientY) {
      leftLimit = event.target.offsetTop + event.clientY - posY.current;

      event.target.style.left = `${
        event.target.offsetLeft + event.clientX - posX.current
      }px`;
      event.target.style.top = `${leftLimit + 5}px`;
      posY.current = event.clientY;
      posX.current = event.clientX;
    }

    if (
      event.clientX + (event.target.offsetWidth - event.nativeEvent.offsetX) >=
      window.innerWidth
    ) {
      leftLimit = event.target.offsetLeft + event.clientX - posX.current;

      event.target.style.left = `${leftLimit - 20}px`;
      event.target.style.top = `${
        event.target.offsetTop + event.clientY - posY.current
      }px`;
      posY.current = event.clientY;
      posX.current = event.clientX;
    }

    if (
      event.clientY + (event.target.offsetHeight - event.nativeEvent.offsetY) >=
      window.innerHeight
    ) {
      leftLimit = event.target.offsetTop + event.clientY - posY.current;

      event.target.style.left = `${
        event.target.offsetLeft + event.clientX - posX.current
      }px`;
      event.target.style.top = `${leftLimit - 20}px`;
      posY.current = event.clientY;
      posX.current = event.clientX;
    }

    event.target.style.left = `${
      event.target.offsetLeft + event.clientX - posX.current
    }px`;
    event.target.style.top = `${
      event.target.offsetTop + event.clientY - posY.current
    }px`;
    posY.current = event.clientY;
    posX.current = event.clientX;
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      dispatch(closeModal());
    }
  };

  return (
    <div>
      <Shadow></Shadow>
      <Background
        ref={modalRef}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        draggable
      >
        모달창 3입니다.<button onClick={handleClick}>닫기</button>
      </Background>
    </div>
  );
};

const Background = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;

  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: grey;
  opacity: 0.6;
`;

export default Modal3;
