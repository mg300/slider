"use client";
import React, { useState } from "react";
import styled, { css } from "styled-components";

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
`;

function SlideDots() {
  const [slideNumActive, setSlideNumActive] = useState<number>(0);
  const [progressPercent, setProgressPercent] = useState<number>(10);

  const handleClick = function (num: number) {
    setSlideNumActive(num);
  };

  return (
    <SlideDotsComp>
      {[0, 1, 2, 3].map((i) => (
        <Dot key={i} onClick={() => handleClick(i)} className={slideNumActive === i ? "active" : ""}>
          {slideNumActive === i && <Progress $ProgressPercent={progressPercent} />}
        </Dot>
      ))}
    </SlideDotsComp>
  );
}

export default SlideDots;
