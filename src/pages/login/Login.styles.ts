import styled from "styled-components";

export const LoginContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const LoginInput = styled.input`
    width: 334px;
    height: 50px;
    border-radius: 15px;
    padding: 0 20px;
    border-style: solid;
    border-color: #BDBDBD;
`;

export const ErrorMessage = styled.p`
    color: red;
`