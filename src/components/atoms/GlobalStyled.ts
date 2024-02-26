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
        /* color: #000; */
    }

    body {
    color: #000; 
}
@media (prefers-color-scheme: dark) {
    body {
        color: #fff; 
    }
}
    .dark-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); 
        z-index: 1; 
    }

`;
