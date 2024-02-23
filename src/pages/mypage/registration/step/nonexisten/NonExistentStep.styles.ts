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

export const NonExistentTextArea = styled.textarea`
    width: 334px;
    height: 50px;
    border-radius: 20px;
    padding: 10px 20px;
    border: 2px solid #bdbdbd;
    outline: none;
    transition: border-color 0.3s ease;
    opacity: 70%;
    &:focus {
        border-color: #72a474;
    }
`