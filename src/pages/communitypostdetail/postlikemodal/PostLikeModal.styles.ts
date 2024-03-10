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

export const PostLikeModalBody = styled.div`
    width: 270px;
    height: 116px;
    border-radius: 6px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 40%;
    right: 3%;
    z-index: 2;
`;

export const PostLikeModalContent = styled.div`
    width: auto;
    height: auto;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    display: flex;
`;

export const PostLikeModalButtonLayout = styled.div`
    width: auto;
    height: auto;
    display: flex;
`;

export const PostLikeModalButton = styled.button`
    width: 128px;
    height: 48px;
    border-radius: 20px;
    background-color: #72a474;
`;

export const PostLikeModalButtonContent = styled.div`
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
