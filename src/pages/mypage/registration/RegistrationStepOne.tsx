import React from 'react'
import { currentStepState } from '../../../recoil/atom'
import { useRecoilState } from 'recoil';

export const RegistrationStepOne:React.FC = () => {
    const [currentStep, setCurrentStep] = useRecoilState<number>(currentStepState);
    const handleNextStep = ()=>{
        setCurrentStep(currentStep+1);
    }
  return (
    <div>
        <h2>스텝 1</h2>
        <button onClick={handleNextStep}>Next</button>
    </div>
  )
}
