import styled from 'styled-components';
import { SharedButton } from '../Shared.styles';

export const MyProfileContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const MyProfileHeader = styled.div`
    width: 312px;
    margin: 0 auto;
`
export const LogoutButton = styled(SharedButton)`
    background-color: #72a474;
`;

