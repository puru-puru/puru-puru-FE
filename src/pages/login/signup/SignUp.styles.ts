import styled from 'styled-components';
import { SharedBotten } from '../../Shared.styles';

export const SignUpBotten = styled(SharedBotten)<{ $isChecked: boolean }>`
    position: absolute;
    bottom: 2%;
    background-color: ${(props) => (props.$isChecked ? '#72A474' : '#DAEBCA')};
`;
