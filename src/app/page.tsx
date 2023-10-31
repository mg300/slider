"use client";
import Image from "next/image";
import PlayPause from "./components/control/PlayPause";
import SlideDots from "./components/control/SlideDots";
import Control from "./components/control/Control";
import Slide from "./components/slide/Slide";
import styled from "styled-components";
import Slider from "./components/Slider/Slider";
const Main = styled.main`
  width: 100%;
  height: 100vh;
`;
export default function Home() {
  return (
    <Main>
      <Slider />
    </Main>
  );
}
