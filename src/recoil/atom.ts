import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: null,
});

export const currentStepState = atom({
  key: 'currentStepState',
  default: 1,
})