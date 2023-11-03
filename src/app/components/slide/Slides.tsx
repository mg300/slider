import React from "react";
import styled from "styled-components";
import Image from "next/image";
interface Idata {
  id: number;
  text: string;
  imageURL: string;
  audioURL: string;
}
const SlideWrapper = styled.div<{ $currentSlideNum: number }>`
  width: 100%;
  height: 100%;
  transform: translateX(
    calc(${(props) => -100 * props.$currentSlideNum}% - ${(props) => 80 * props.$currentSlideNum}px)
  );
  transition: transform 1s;
`;
const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c7c7c7;
  border-radius: 36px;
  display: inline-block;
  margin-right: 80px;
  overflow: hidden;
`;

const Title = styled.div`
  margin: 50px 0 0 40px;
  color: white;
  position: absolute;
  font-size: 30px;
  font-weight: 700;
  z-index: 1;
  background-color: #0000008c;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 16px 10px #0000008c;
  -moz-box-shadow: 0px 0px 16px 10px #0000008c;
  box-shadow: 0px 0px 16px 10px #0000008c;
`;
function Slides({ currentSlide, data }: { currentSlide: number; data: Idata[] }) {
  return (
    <SlideWrapper $currentSlideNum={currentSlide - 1}>
      {data.map((obj: Idata) => (
        <Slide key={obj.id}>
          <Title>{obj.text}</Title>
          <Image
            style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", borderRadius: "36px" }}
            src={obj.imageURL}
            width={600}
            height={700}
            alt={"abc"}
          />
        </Slide>
      ))}
    </SlideWrapper>
  );
}

export default Slides;
