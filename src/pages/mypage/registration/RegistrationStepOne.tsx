import React from 'react';
import { currentStepState } from '../../../recoil/atom';
import { useRecoilState } from 'recoil';
import { SharedInput } from '../../Shared.styles';

export const RegistrationStepOne: React.FC = () => {
    const [currentStep, setCurrentStep] = useRecoilState<number>(currentStepState);
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    return (
        <div>
            <p>이미지 업로드</p>
            <p>반려 식물 이름을 설정해주세요</p>
            <SharedInput></SharedInput>
            <p>반려 식물을 만난 날은 언제 인가요?</p>
            <SharedInput></SharedInput>
            <button onClick={handleNextStep}>Next</button>
        </div>
    );
};
