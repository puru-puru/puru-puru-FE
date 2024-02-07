import styled from 'styled-components';
// import { colors } from '../../styles/colors';

export const OnboardingContainner = styled.div`
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;
export const OnboardingLine = styled.div`
    border-top: 1px solid #444444;
    margin: 30px 0px;
    width: 300px;
`;
export const CheckboxContainer = styled.div`
    margin-bottom: 10px;
`;

export const OnboardingBotten = styled.button<{ $isChecked: boolean }>`
    position: fixed;
    bottom: 10%;
    width: 334px;
    height: 57px;
    border-radius: 20px;
    background-color: ${props => props.$isChecked ? "#72A474" : "#DAEBCA"};
    color: #FFFFFF;
    border: none;
    &:focus {
        outline: none; // 클릭되었을 때 생기는 외곽선 제거
    }
`;
