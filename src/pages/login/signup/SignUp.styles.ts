import styled from "styled-components";

export const SignUpBotten = styled.button<{$isChecked: boolean}>`
    position: fixed;
    bottom: 10%;
    width: 334px;
    height: 57px;
    border-radius: 20px;
    background-color: ${props => props.$isChecked ? "#72A474" : "#DAEBCA"};
    color: #FFFFFF;

    &:focus {
        outline: none; 
    }
`;