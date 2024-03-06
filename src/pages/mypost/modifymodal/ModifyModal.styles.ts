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

export const ModifyModalBody = styled.div`
    width: 334px;
    height: 116px;
    border-radius: 6px;
    gap: 12px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    z-index: 2;
`;

export const ModifyModalContent = styled.div`
    width: auto;
    height: auto;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    display: flex;
`;

export const ModifyModalButtonLayout = styled.div`
    width: auto;
    height: auto;
    gap: 10px;
`;

export const ModifyModalRightButton = styled.button`
    width: 147px;
    height: 48px;
    border-radius: 20px;
    background-color: #daeaca;
`;

export const ModifyModalLeftButton = styled.button`
    width: 147px;
    height: 48px;
    border-radius: 20px;
    background-color: #72a474;
`;

export const ModifyModalButtonContent = styled.div`
    width: auto;
    height: auto;
    font-size: 18px;
    font-weight: 600;
    color: white;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
