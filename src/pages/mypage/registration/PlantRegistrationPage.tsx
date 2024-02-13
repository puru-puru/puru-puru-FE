import React from 'react';
import { PetPlantHeader, PetPlantHeaderTitle } from '../MyPlantPage.styles';
import { currentStepState } from '../../../recoil/atom';
import { useRecoilState } from 'recoil';
import { RegistrationStepOne } from './step/RegistrationStepOne';
import { RegistrationStepTwo } from './step/RegistrationStepTwo';
import HorizontalStepper from './stepper/HorizontalStepper'; 
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
