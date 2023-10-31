import React from "react";
import styled from "styled-components";
import Control from "../control/Control";
import Slides from "../slide/Slide";
import Audio from "../../Audio";
const SliderComp = styled.div`
  width: 800px;
  height: 500px;
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
        <Slides slideActive={2}></Slides>
      </SliderComp>
      <Audio src="song1.mp3" />
      <Control />
    </>
  );
}

export default Slider;
