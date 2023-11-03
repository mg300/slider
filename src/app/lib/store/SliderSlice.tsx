import { StateCreator } from "zustand";
interface Idata {
  id: number;
  text: string;
  imageURL: string;
  audioURL: string;
}
export interface SliderSlice {
  numOfSlides: number;
  progressBarPercent: number;
  slidesData: Idata[];
  slideDuration: number;
  audioState: "play" | "pause" | "return";
  currentSlideNum: number;
  nextSlide: () => void;
  fetchSlidesData: (arg: string) => void;
  moveToSlide: (arg: number) => void;
  setProgressBar: (arg: number) => void;
  updateAudioState: (arg: "play" | "pause" | "return") => void;
}

export const createSliderSlice: StateCreator<SliderSlice> = (set, get) => ({
  numOfSlides: 0,
  progressBarPercent: 0,
  slideDuration: 7,
  audioState: "pause",
  slidesData: [],
  currentSlideNum: 1,
  isResume: false,
  nextSlide: () => {
    set({ currentSlideNum: get().currentSlideNum + 1 });
  },
  moveToSlide: (slideNum) => {
    set({ currentSlideNum: slideNum });
    set({ progressBarPercent: 0 });
  },
  fetchSlidesData: async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      set({ slidesData: data });
      set({ numOfSlides: data.length });
    } catch (err) {
      console.log("Something went wrong");
    }
  },
  setProgressBar: (num) => {
    set({ progressBarPercent: num });
  },
  updateAudioState: (audioState) => {
    get().audioState = audioState;
  },
});
