import styled from 'styled-components';
import { SharedButton } from '../../../../Shared.styles';

export const StepOneContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const SetImgContainer = styled.div`
    margin: 0 auto;
`;

export const SetNameContainer = styled.div`
    margin: 0 auto;
`;

export const NextStepButton = styled(SharedButton)<{ $isChecked: boolean }>`
    position: absolute;
    bottom: 2%;
    background-color: ${(props) => (props.$isChecked ? '#72A474' : '#DAEBCA')};
`;

export const PreviewContainer = styled.div`
    width: 327px;
    height: 146px;
    border: 2px solid rgba(204, 204, 204, 0.7);
    border-radius: 18px;
    position: relative;
`;

export const PreviewImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 145px;
    max-width: 326px;
`;

export const UploadButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #72a474;
    color: white;
    border: none;
    display: flex;

    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
