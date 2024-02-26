import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: null,
});

export const currentStepState = atom({
  key: 'currentStepState',
  default: 1,
})

export const isSplashState = atom({
  key: 'isSplashState',
  default: true,
});

export const myplantPageState = atom({
  key: 'myplantPageState',
  default: 0,
});