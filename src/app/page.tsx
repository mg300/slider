"use client";
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
