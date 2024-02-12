import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
* {
        box-sizing: border-box;
        font-family: 'Pretendard';
    }
/* body {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  } */
`;
