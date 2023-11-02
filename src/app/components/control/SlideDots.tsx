"use client";
import { useAppStore } from "@/app/lib/store/store";
import React from "react";
import styled from "styled-components";

const SlideDotsComp = styled.div`
  width: 170px;
  height: 60px;
  background-color: rgba(232, 232, 237, 0.7);
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const Dot = styled.button`
  border: none;
  width: 10px;
  border-radius: 10px;
  height: 10px;
  cursor: pointer;
  background-color: #898989;
  transition: width 0.5s;
  overflow: hidden;

  &.active {
    width: 50px;
    border-radius: 10px;
  }
`;
const Progress = styled.div<{ $ProgressPercent: number }>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(74, 74, 74, 0.7);
  transform: translateX(${(props) => -100 + props.$ProgressPercent}%);
  transition: transform 0.6s;
`;

function SlideDots() {
  const { progressBarPercent, currentSlideNum, moveToSlide, numOfSlides } = useAppStore();
  const handleClick = function (num: number) {
    moveToSlide(num);
  };
  return (
    <SlideDotsComp>
      {Array(numOfSlides)
        .fill(null)
        .map((_, i) => (
          <Dot key={i} onClick={() => handleClick(i + 1)} className={currentSlideNum - 1 === i ? "active" : ""}>
            {currentSlideNum - 1 === i && <Progress $ProgressPercent={progressBarPercent} />}
          </Dot>
        ))}
    </SlideDotsComp>
  );
}
export default SlideDots;
