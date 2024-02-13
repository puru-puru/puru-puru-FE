import React from 'react'
import { currentStepState } from '../../../recoil/atom'
import { useRecoilState } from 'recoil';

export const RegistrationStepTwo:React.FC = () => {
    const [currentStep, setCurrentStep] = useRecoilState<number>(currentStepState);
    const handlePreviousStep = ()=>{
        setCurrentStep(currentStep-1);
    }
  return (
    <div>
        <h2>스텝 2</h2>
        <button onClick={handlePreviousStep}>Previous</button>
    </div>
  )
}
