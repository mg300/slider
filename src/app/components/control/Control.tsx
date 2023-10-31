"use client";
import React from "react";
import PlayPause from "./PlayPause";
import SlideDots from "./SlideDots";
import styled from "styled-components";

const ControlComp = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 40px;
  gap: 30px;
`;
function Control() {
  return (
    <ControlComp>
      <SlideDots />
      <PlayPause />
    </ControlComp>
  );
}

export default Control;
