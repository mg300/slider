import React from "react";
import styled from "styled-components";
import Control from "../control/Control";
import Slides from "../slide/Slide";
import { useAppStore } from "@/app/lib/store/store";
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
  const { currentSlideNum } = useAppStore();
  return (
    <>
      <SliderComp>
        <Slides slideActive={currentSlideNum}></Slides>
      </SliderComp>
      <Control />
    </>
  );
}

export default Slider;
