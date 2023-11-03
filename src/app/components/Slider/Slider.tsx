import React, { useEffect } from "react";
import styled from "styled-components";
import Control from "../control/Control";
import Slides from "../slide/Slides";
import { useAppStore } from "@/app/lib/store/store";
const SliderComp = styled.div`
  width: 1200px;
  height: 800px;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  padding-top: 50px;
  margin: 0 auto 0 auto;
  gap: 6rem;

  @media (width< 996px) {
    width: 100%;
    height: 600px;
    padding-top: 30px;
    gap: 3rem;
  }
  @media (996px<=width< 1200px) {
    width: 1000px;
    height: 700px;
  }
`;
function Slider() {
  const { currentSlideNum, fetchSlidesData, slidesData } = useAppStore();
  useEffect(() => {
    fetchSlidesData("http://localhost:3000/api/slider");
  }, [fetchSlidesData]);

  return (
    <>
      <SliderComp>
        <Slides currentSlide={currentSlideNum} data={slidesData}></Slides>
      </SliderComp>
      <Control />
    </>
  );
}

export default Slider;
