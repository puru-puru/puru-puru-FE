import React from 'react';
import { PetPlantHeader, PetPlantHeaderTitle } from '../MyPlantPage.styles';
import { currentStepState } from '../../../recoil/atom';
import { useRecoilState } from 'recoil';
import { RegistrationStepOne } from './step/stepone/RegistrationStepOne';
import { RegistrationStepTwo } from './step/steptwo/RegistrationStepTwo';
import HorizontalStepper from './stepper/HorizontalStepper';
import { useNavigate } from 'react-router-dom';
import { BackspaceButton } from '../../../components/atoms/button/BackspaceButton';
import { RegistrationListStep } from './step/nonexisten/NonExistentStep';

const PlantRegistrationPage: React.FC = () => {
    const [currentStep, setCurrentStep] = useRecoilState<number>(currentStepState);
    const navigate = useNavigate();

    const goToPreviousStep = () => {
        if (currentStep === 1) {
            navigate('/myplant');
            setCurrentStep(1);
        } else {
            setCurrentStep(currentStep - 1);
        }
    };
    return (
        <>
                <BackspaceButton onClick={goToPreviousStep} />
            <PetPlantHeader>
                <PetPlantHeaderTitle>나의 반려 식물</PetPlantHeaderTitle>
            </PetPlantHeader>

            {currentStep === 1 && (
                <>
                    <HorizontalStepper currentStep={currentStep} />
                    <RegistrationStepOne />
                </>
            )}
            {currentStep === 2 && (
                <>
                    <HorizontalStepper currentStep={currentStep} />
                    <RegistrationStepTwo />
                </>
            )}
            {currentStep === 3 && (
                <>
                    <RegistrationListStep />
                </>
            )}
        </>
    );
};

export default PlantRegistrationPage;
