import styled from 'styled-components';

export const SharedInput = styled.input`
    width: 334px;
    height: 50px;
    border-radius: 20px;
    padding: 0 20px;
    border: 2px solid #bdbdbd;
    outline: none;
    transition: border-color 0.3s ease;
    &:focus {
        border-color: #72a474;
    }
`;

export const SharedBotten = styled.button`
    width: 334px;
    height: 57px;
    border-radius: 20px;
    color: #ffffff;
`;
