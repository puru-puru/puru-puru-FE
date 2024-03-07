import styled from 'styled-components';
import { SharedButton } from '../../../../Shared.styles';
import { colors } from '../../../../../styles/colors';
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
    background-color: ${(props) => (props.$isChecked ? colors.green100 : colors.green50)};
`;

export const PreviewContainer = styled.div`
    width: 318px;
    height: 180px;
    border: 2px solid rgba(204, 204, 204, 0.7);
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    position: relative;
`;
export const PreviewImageBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.green100};
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const PreviewImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const UploadButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${colors.green100};
    color: white;
    border: none;
    display: flex;

    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ReUploadButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: ${colors.gray50};
    opacity: 10%;
`
