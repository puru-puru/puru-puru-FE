import styled from 'styled-components';
import { SharedBotten } from '../Shared.styles';

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

export const OnboardingBotten = styled(SharedBotten)<{ $isChecked: boolean }>`
    position: absolute;
    bottom: 2%;
    background-color: ${(props) => (props.$isChecked ? '#72A474' : '#DAEBCA')};
`;
