import styled from 'styled-components';

export const PostModifyButton = styled.button`
    width: 24px;
    height: 24px;
    padding: 0px;
    background-color: #fafff4;
`;

export const PostModifyButtonImg = styled.img`
    width: 16px;
    height: 16px;
    background-color: #fafff4;
`;

export const ToggleButtonWrapper = styled.div`
    width: auto;
    height: 60px;
    border: 1px solid rgba(218, 234, 202, 1);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    /* overflow: visible; */
    position: absolute;
    right: 8%;
`;

export const DeleteButton = styled.div`
    width: auto;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    color: red;
    background-color: white;
    border-radius: 8px 8px 0px 0px;
    font-size: 11px;
    font-weight: 400;
    line-height: 27px;
    overflow: hidden;
`;

export const ModifyButton = styled.div`
    width: 70px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    background-color: white;
    border-radius: 0px 0px 8px 8px;
    font-size: 11px;
    font-weight: 400;
    line-height: 27px;
    overflow: hidden;
`;

export const ButtonImg = styled.img`
    width: 16px;
    height: 16px;
`;

export const ToggleButtonLine = styled.div`
    width: 70px;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
`;
