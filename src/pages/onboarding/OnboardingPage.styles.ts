import styled from 'styled-components';
import { SharedButton } from '../Shared.styles';

export const OnboardingContainer = styled.div`
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

export const OnboardingButton = styled(SharedButton)<{ $isChecked: boolean }>`

    position: absolute;
    bottom: 2%;
    background-color: ${(props) => (props.$isChecked ? '#72A474' : '#DAEBCA')};
`;