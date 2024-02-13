import React from 'react';
import styled from 'styled-components';

const StepperContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 50px;
`;

const Step = styled.div<{ $isActive: boolean }>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => (props.$isActive ? '#72A474' : '#CBCBCB')};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
`;

const Line = styled.div`
    flex: 1;
    height: 3px;
    background-color: #cbcbcb;
`;
const CustomStepper: React.FC<{ currentStep: number }> = ({ currentStep }) => {
    return (
        <>
            <StepperContainer>
                {[...Array(2)].map((_, index) => (
                    <>
                        <Step key={index} $isActive={index + 1 === currentStep}>
                            {index + 1}
                        </Step>
                        {index !== 2 - 1 && <Line />}
                    </>
                ))}
            </StepperContainer>
            <p>기본 정보</p>
        </>
    );
};

export default CustomStepper;
