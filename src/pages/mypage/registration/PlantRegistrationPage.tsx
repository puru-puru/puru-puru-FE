import React from 'react';
import { PetPlantHeader, PetPlantHeaderTitle } from '../MyPlantPage.styles';
import { currentStepState } from '../../../recoil/atom';
import { useRecoilState } from 'recoil';
import { RegistrationStepOne } from './RegistrationStepOne';
import { RegistrationStepTwo } from './RegistrationStepTwo';
import HorizontalStepper from './HorizontalStepper'; // 변경된 부분: Stepper -> HorizontalStepper

const PlantRegistrationPage: React.FC = () => {
    const [currentStep] = useRecoilState<number>(currentStepState);
    
    return (
        <>
            <PetPlantHeader>
                <PetPlantHeaderTitle>나의 반려 식물</PetPlantHeaderTitle>
            </PetPlantHeader>
            <HorizontalStepper currentStep={currentStep} />
            {currentStep === 1 && <RegistrationStepOne />}
            {currentStep === 2 && <RegistrationStepTwo />}
        </>
    );
};

export default PlantRegistrationPage;
