import styled from "styled-components";

export const SignUpBotten = styled.button<{$isChecked: boolean}>`
    position: absolute;
    bottom: 2%;
    width: 334px;
    height: 57px;
    border-radius: 20px;
    background-color: ${props => props.$isChecked ? "#72A474" : "#DAEBCA"};
    color: #FFFFFF;
    &:focus {
        outline: none;
    }
`;