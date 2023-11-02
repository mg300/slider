import { StateCreator } from "zustand";

export interface SliderSlice {
  numOfSlides: number;
  progressBarPercent: number;
  slideDuration: number;
  audioState: "play" | "pause" | "return";
  imageURLs: string[];
  audioURLs: string[];
  currentSlideNum: number;
  nextSlide: () => void;
  fetchSlidesData: () => void;
  moveToSlide: (arg: number) => void;
  setProgressBar: (arg: number) => void;
  updateAudioState: (arg: "play" | "pause" | "return") => void;
}

export const createSliderSlice: StateCreator<SliderSlice> = (set, get) => ({
  numOfSlides: 2,
  progressBarPercent: 0,
  audioState: "pause",
  imageURLs: [],
  audioURLs: ["song1.mp3", "song2.mp3"],
  slideDuration: 5,
  currentSlideNum: 1,
  isResume: false,
  nextSlide: () => {
    set({ currentSlideNum: get().currentSlideNum + 1 });
  },
  moveToSlide: (slideNum) => {
    set({ currentSlideNum: slideNum });
    set({ progressBarPercent: 0 });
  },
  fetchSlidesData: () => {},
  setProgressBar: (num) => {
    set({ progressBarPercent: num });
  },
  updateAudioState: (audioState) => {
    get().audioState = audioState;
  },
});
