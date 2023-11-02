import React from "react";
import styled from "styled-components";
import Image from "next/image";
const SlideWrapper = styled.div<{ $slideActiveNum: number }>`
  width: 100%;
  height: 100%;
  transform: translateX(calc(${(props) => -100 * props.$slideActiveNum}% - ${(props) => 80 * props.$slideActiveNum}px));
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
  font-size: 26px;
  font-weight: 700;
  z-index: 1;
`;
function Slides({ slideActive }: { slideActive: number }) {
  return (
    <SlideWrapper $slideActiveNum={slideActive - 1}>
      <Slide>
        <>
          <Title>Witam 1</Title>
          <Image
            style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", borderRadius: "36px" }}
            src="/car.png"
            width={600}
            height={700}
            alt={"abc"}
          />
        </>
      </Slide>
      <Slide>
        <Title>Witam 2</Title>
        <Image
          style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", borderRadius: "36px" }}
          src="/car.png"
          width={600}
          height={700}
          alt={"abc"}
        />
      </Slide>
    </SlideWrapper>
  );
}

export default Slides;
