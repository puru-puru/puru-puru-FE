import styled from 'styled-components';
import { SharedButton } from '../../../../Shared.styles';
export const NonExistentContainer = styled.div`
    width: 334px;
    margin: 0 auto;
    font-size: 14px;
    display: flex;
    flex-direction: column;
`;

export const NonExistentText = styled.div`
    margin-bottom: 15px;
    opacity: 70%;
`;

export const NonExistentNextButton = styled(SharedButton)`
    position: absolute;
    bottom: 2%;
    background-color: #72a474;
    font-size: 16px;
`;
