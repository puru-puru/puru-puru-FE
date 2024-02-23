import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

  0% {
    opacity: 0;
  }
`;

export const SplashBackground = styled.div`
    background-color: #72a474;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeOut} 1.5s ease;
`;

export const BottomText = styled.p`
  position: absolute;
  bottom: 2%;
  left: 50%;
  color: #fff;
  font-weight: bold;
  transform: translateX(-50%);
`;