import React from 'react';
import { currentStepState } from '../../../../recoil/atom';
import { useRecoilState } from 'recoil';
import { SharedInput } from '../../../Shared.styles';
import {
    NextStepButton,
    PreviewContainer,
    PreviewImage,
    SetImgContainer,
    SetNameContainer,
    StepOneContainer,
    UploadButton,
} from './RegistrationStepOne.styles';

export const RegistrationStepOne: React.FC = () => {
    const [currentStep, setCurrentStep] = useRecoilState<number>(currentStepState);
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    return (
        <StepOneContainer>
            <SetImgContainer>
                <p>이미지 업로드</p>
                <PreviewContainer>
                <PreviewImage></PreviewImage>
                    <UploadButton><img src="./Plus_Icon.svg" alt="PlusIcon" /></UploadButton>
                </PreviewContainer>
            </SetImgContainer>
            <SetNameContainer>
                <p>반려 식물 이름을 설정해주세요</p>
                <SharedInput placeholder="오월이 행복해" />
            </SetNameContainer>
            <SetNameContainer>
                <p>반려 식물을 만난 날은 언제 인가요?</p>
                <SharedInput placeholder="YYYY-MM-DD" />
            </SetNameContainer>
            <NextStepButton onClick={handleNextStep}>Next</NextStepButton>
        </StepOneContainer>
    );
};
