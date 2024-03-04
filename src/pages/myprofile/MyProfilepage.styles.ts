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
    margin-top: 20px;
    background-color: #72a474;
`;

export const ProfileSideButton = styled.button`
    background: none;
`

export const ProfileSideContainer = styled.div`
    margin-top: 20px;
`