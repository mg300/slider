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
  const {
    audioURLs,
    currentSlideNum,
    numOfSlides,
    nextSlide,
    setProgressBar,
    moveToSlide,
    updateAudioState,
    audioState,
  } = useAppStore();
  const [btnState, setBtnState] = useState("play");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioURLs) {
      const audioElement = document.createElement("audio");
      audioElement.src = audioURLs[currentSlideNum - 1];
      audioRef.current = audioElement;
      audioElement.addEventListener("timeupdate", () => {
        setProgressBar((audioElement.currentTime / audioElement.duration) * 100);
      });
      const handleAudioEnded = () => {
        audioElement.removeEventListener("ended", handleAudioEnded);
        if (numOfSlides === currentSlideNum) {
          setBtnState("return");
          updateAudioState("return");
        } else {
          nextSlide();
        }
      };

      if (audioState === "play") {
        playAudio();
        setBtnState("pause");
      }
      audioElement.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioRef.current) {
        pauseAudio();
      }
    };
  }, [currentSlideNum, audioState, audioURLs, setProgressBar, numOfSlides, updateAudioState, nextSlide]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };
  const handleClick = function () {
    if (btnState === "play") {
      setBtnState("pause");
      updateAudioState("play");
      playAudio();
    }
    if (btnState === "pause") {
      setBtnState("play");
      updateAudioState("pause");
      pauseAudio();
    }
    if (btnState === "return") {
      setBtnState("pause");
      updateAudioState("play");
      moveToSlide(1);
      playAudio();
    }
  };

  return (
    <PlayPauseComp onClick={handleClick}>
      {btnState == "pause" && <FaPause />}
      {btnState == "play" && <FaPlay />}
      {btnState === "return" && <PiArrowCounterClockwiseBold />}
    </PlayPauseComp>
  );
}
export default PlayPause;
