import { atom, RecoilState } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: null,
});


// 현재 단계를 나타내는 Atom
export const currentStepState: RecoilState<number> = atom({
  key: 'currentStepState',
  default: 1,
});

// 스플래시 화면 표시 여부를 나타내는 Atom
export const isSplashState: RecoilState<boolean> = atom({
  key: 'isSplashState',
  default: true,
});

// 내 식물 페이지의 현재 페이지를 나타내는 Atom
export const myplantPageState: RecoilState<number> = atom({
  key: 'myplantPageState',
  default: 0,
});