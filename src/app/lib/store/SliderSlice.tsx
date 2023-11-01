import { StateCreator } from "zustand";

export interface SliderSlice {
  numOfSlides: number;
  slideDuration: number;
  isPlaying: boolean;
  imageURLs: string[];
  audioURLs: string[];
  isResume: boolean;
  currentSlideNum: number;
  nextSlide: () => void;
  fetchSlidesData: () => void;
  moveToSlide: (arg: number) => void;
}

export const createSliderSlice: StateCreator<SliderSlice> = (set, get) => ({
  numOfSlides: 0,
  isPlaying: true,
  imageURLs: [],
  audioURLs: ["song1.mp3", "song2.mp3"],
  slideDuration: 5,
  currentSlideNum: 0,
  isResume: false,
  nextSlide: () => {
    if (get().currentSlideNum === get().numOfSlides) set({ isResume: true });
    set({ currentSlideNum: get().currentSlideNum + 1 });
  },
  moveToSlide: (slideNum) => {
    set({ currentSlideNum: slideNum });
    set({ isResume: false });
  },
  fetchSlidesData: () => {},
});
