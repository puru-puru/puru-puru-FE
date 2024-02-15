import React from 'react';
import { StepStateTextContainer } from '../PlantRegistrationPage.styles';
import { StepperLine, StepperState, StepperContainer } from './HorizontalStepper.styles';



const CustomStepper: React.FC<{ currentStep: number }> = ({ currentStep }) => {
    return (
        <>
            <StepperContainer>
                {/* Fragment는 React에서 여러 자식 요소를 그룹화할 때 사용하는 특별한 컴포넌트 */}
                {/* 불필요한 div 요소를 생성하지 않고도 여러 요소를 렌더링 */}
                {[...Array(2)].map((_, index) => (
                    <React.Fragment key={index}>
                        <StepperState $isActive={index + 1 <= currentStep}>{index + 1}</StepperState>
                        {index !== 1 && <StepperLine $isActive={index + 1 === currentStep} key={`line-${index}`} />}
                    </React.Fragment>
                ))}
            </StepperContainer>
            <StepStateTextContainer>
                <p>기본 정보</p>
                <p>식물 찾기</p>
            </StepStateTextContainer>
        </>
    );
};

export default CustomStepper;
