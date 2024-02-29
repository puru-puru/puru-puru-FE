import styled from 'styled-components';
import { SharedButton } from '../../Shared.styles';
import { colors } from '../../../styles/colors';
export const NotiModalContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NotiModalButton = styled(SharedButton)<{$isChecked: boolean}>`
    width: 120px;
    height: 48px;
    background-color: ${(props)=>(props.$isChecked ? colors.green100 : colors.green50)};
`;
