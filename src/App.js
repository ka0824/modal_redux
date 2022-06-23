import "./App.css";
import ModalPortal from "./modal/ModalPortal";
import Modal from "./modal/Modal";
import React, { useState } from "react";
import Test from "./Test";
import ModalBackground from "./modal/ModalBackground";
import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Wrapper className="App">
      <ModalPortal>
        <ModalBackground></ModalBackground>
      </ModalPortal>
      <Shadow></Shadow>
      <Test></Test>
    </Wrapper>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div``;

const Shadow = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
