import styled from "styled-components";


export const StepperContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 50px;
    margin-top: 30px;
`;

export const StepperState = styled.div<{ $isActive: boolean }>`
    width: 18px;
    height: 18px;
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

export const StepStateTextContainer = styled.div`
    width: 262px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 48px;
    margin-bottom: 20px;
    font-size: 8px;
    font-weight: bold;
`