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
  moveToFirst: () => void;
}

export const createSliderSlice: StateCreator<SliderSlice> = (set, get) => ({
  numOfSlides: 1,
  isPlaying: true,
  imageURLs: [],
  audioURLs: ["song1.mp3", "song2.mp3"],
  slideDuration: 5,
  currentSlideNum: 0,
  isResume: false,
  nextSlide: () => {
    if (get().currentSlideNum === get().numOfSlides) {
      set({ isResume: true });
      set({ isPlaying: false });
    } else {
      set({ currentSlideNum: get().currentSlideNum + 1 });
    }
  },
  moveToSlide: (slideNum) => {
    set({ currentSlideNum: slideNum });
    set({ isResume: false });
  },
  fetchSlidesData: () => {},
  moveToFirst: () => {
    set({ currentSlideNum: 0 });
    set({ isPlaying: true });
    set({ isResume: false });
  },
});
