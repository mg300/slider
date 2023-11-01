import { create } from "zustand";
import { createSliderSlice, SliderSlice } from "./SliderSlice";

export const useAppStore = create<SliderSlice>()((...a) => ({
  ...createSliderSlice(...a),
}));
