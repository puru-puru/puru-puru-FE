import styled from 'styled-components';
import { SharedButton } from '../../Shared.styles';

export const SignUpBotten = styled(SharedButton)<{ $isChecked: boolean }>`
    position: absolute;
    bottom: 2%;
    background-color: ${(props) => (props.$isChecked ? '#72A474' : '#DAEBCA')};
`;
