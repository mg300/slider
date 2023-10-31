import React from "react";
import styled from "styled-components";
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
`;

const Title = styled.div`
  margin: 50px 0 0 40px;
  color: white;
  font-size: 26px;
  font-weight: 700;
`;
function Slides() {
  return (
    <SlideWrapper $slideActiveNum={0}>
      <Slide>
        <Title>Witam 1</Title>
      </Slide>
      <Slide>
        <Title>Witam 2</Title>
      </Slide>
    </SlideWrapper>
  );
}

export default Slides;
