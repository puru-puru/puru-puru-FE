import styled from 'styled-components';

export const ModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    inset: 0px;
    opacity: 0.8;
    background-color: rgb(221, 221, 221);
    z-index: 1;
    position: absolute;
    overflow-y: hidden;
`;

export const ModalBody = styled.div`
    width: 310px;
    height: 82px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: absolute;
    bottom: 10%;
`;
export const ModalContent = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20.27px;
    color: rgba(0, 0, 0, 1);
`;
