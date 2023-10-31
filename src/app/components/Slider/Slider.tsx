import React from "react";
import styled from "styled-components";
import Control from "../control/Control";
import Slides from "../slide/Slide";
const SliderComp = styled.div`
  width: 70%;
  height: 70%;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  margin: 50px auto 0 auto;
  gap: 6rem;
`;
function Slider() {
  return (
    <>
      <SliderComp>
        <Slides></Slides>
      </SliderComp>
      <Control />
    </>
  );
}

export default Slider;
