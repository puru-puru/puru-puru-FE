import React from 'react';
import { useNavigate } from 'react-router-dom';
import { currentStepState } from '../../../../../recoil/atom';
import { useRecoilState } from 'recoil';
import { FindOtherPlantsButton, SavePlantsButton, SelectionCompletedContainer } from './SelectionCompleted.styles';
import { SelectedCardProps } from '../../../../../api/model';
import { searchApi } from '../../../../../api/http';


const SelectionCompleted: React.FC<SelectedCardProps> =  ({ selectedCard }) => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useRecoilState<number>(currentStepState);
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleSelect = async () => {
        try {
            await searchApi.post(`/api/plants/${selectedCard}/save`);
            navigate('/myplant');
            setCurrentStep(1);
        } catch (error: any) {
            console.error('에러 발생:', error);
            if (error.response) {
                console.error('서버 응답 데이터:', error.response.data);
            }
        } 
    };
    return (
        <SelectionCompletedContainer>
            <FindOtherPlantsButton 
            onClick={handleNextStep}>
                관련 식물이 없어요
            </FindOtherPlantsButton>
            <SavePlantsButton 
            $isChecked={!selectedCard}
            disabled={!selectedCard}
            onClick={handleSelect}>네, 찾았어요</SavePlantsButton>
        </SelectionCompletedContainer>
    );
};

export default SelectionCompleted;
