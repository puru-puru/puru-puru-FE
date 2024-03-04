import styled from 'styled-components';
import { SharedButton, SharedInput } from '../../Shared.styles';

export const SignUpBotten = styled(SharedButton)<{ $isChecked: boolean }>`
    position: absolute;
    bottom: 2%;
    background-color: ${(props) => (props.$isChecked ? '#72A474' : '#DAEBCA')};
`;


export const StyledInput = styled(SharedInput)<{ $invalid: boolean }>`
    &:focus-visible {
        border-color: ${(props) => (props.$invalid ? 'red' : '#72A474')};
        outline: none;
    }
`;
