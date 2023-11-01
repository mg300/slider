"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { useAppStore } from "@/app/lib/store/store";
const PlayPauseComp = styled.button`
  width: 60px;
  height: 60px;
  background-color: rgba(232, 232, 237, 0.7);
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: rgba(240, 240, 240, 0.7);
  }
  &:active {
    background-color: rgba(235, 235, 235, 0.7);
  }
  border: none;
`;

function PlayPause() {
  const { audioURLs, currentSlideNum, nextSlide, isResume, moveToFirst } = useAppStore();
  const [btnState, setBtnState] = useState("play");
  if (isResume && btnState === "pause") {
    setBtnState("resume");
  }

  const handleClick = function () {
    if (btnState === "play") {
      setBtnState("pause");
      playAudio();
    }
    if (btnState === "pause") {
      setBtnState("play");
      pauseAudio();
    }
    if (btnState === "resume") {
      setBtnState("play");
      moveToFirst();
    }
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(currentSlideNum);
  useEffect(() => {
    if (audioURLs) {
      const audioElement = document.createElement("audio");
      audioElement.src = audioURLs[currentSlideNum];
      console.log(audioElement.src);
      audioRef.current = audioElement;
      // audioElement.addEventListener("loadedmetadata", () => {
      //   console.log(audioElement.duration);
      // });
      const handleAudioEnded = () => {
        audioElement.removeEventListener("ended", handleAudioEnded);

        nextSlide();
      };
      if (currentSlideNum != 0) playAudio();

      audioElement.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioRef.current) {
        pauseAudio();
      }
    };
  }, [currentSlideNum]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <PlayPauseComp onClick={handleClick}>
      {btnState == "pause" && <FaPause />}
      {btnState == "play" && <FaPlay />}
      {btnState === "resume" && <PiArrowCounterClockwiseBold />}
    </PlayPauseComp>
  );
}
export default PlayPause;
