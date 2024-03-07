import styled from 'styled-components';
import { SharedButton } from '../Shared.styles';
import { colors } from '../../styles/colors';

export const OnboardingContainer = styled.div`
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    input[type='checkbox'] {
        appearance: none; 
        width: 20px;
        height: 20px;
        border-radius: 4px;
        background-color: #e9e9e9;
        cursor: pointer; 
        &:checked {
            border-color: transparent;
            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
            background-size: 100% 100%;
            background-position: 50%;
            background-repeat: no-repeat;
            background-color: limegreen;
        }
    }
    input[type='checkbox']:checked {
        background-color: ${colors.green100};
    }
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
