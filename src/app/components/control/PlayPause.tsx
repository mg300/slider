"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
const PlayPauseComp = styled.button`
  width: 60px;
  height: 60px;
  background-color: rgba(232, 232, 237, 0.7);
  border-radius: 10rem;
  margin: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: rgba(240, 240, 240, 0.7);
  }
  &:active {
    background-color: rgba(235, 235, 235, 0.7);
  }
  border: none;
`;

function PlayPause() {
  const [btnState, setBtnState] = useState("play");

  const handleClick = function () {
    if (btnState === "play") setBtnState("pause");
    if (btnState === "pause") setBtnState("play");
    if (btnState === "resume") setBtnState("play");
  };

  return (
    <PlayPauseComp onClick={handleClick}>
      {btnState === "play" && <FaPlay />}
      {btnState === "pause" && <FaPause />}
      {btnState === "resume" && <PiArrowCounterClockwiseBold />}
    </PlayPauseComp>
  );
}

export default PlayPause;
