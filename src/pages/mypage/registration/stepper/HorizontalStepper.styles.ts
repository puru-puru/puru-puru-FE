import styled from "styled-components";


export const StepperContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 50px;
    
`;

export const StepperState = styled.div<{ $isActive: boolean }>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => (props.$isActive ? '#72A474' : '#CBCBCB')};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    transition: background-color 0.5s ease;
`;

export const StepperLine = styled.div<{ $isActive: boolean }>`
    flex: 1;
    height: 3px;
    background-color: ${(props) => (props.$isActive ? '#72A474' : '#cbcbcb')};
    background-image: linear-gradient(to right, #72A474 ${(props) => (props.$isActive ? '10%' : '100%')}, #cbcbcb 50%);

`;