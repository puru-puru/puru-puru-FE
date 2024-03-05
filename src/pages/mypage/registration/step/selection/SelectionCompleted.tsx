import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentStepState } from '../../../../../recoil/atom';
import { useRecoilState } from 'recoil';
import { SavePlantsButton, SelectionCompletedContainer } from './SelectionCompleted.styles';
import { SelectedCardProps } from '../../../../../api/model';
import { searchApi } from '../../../../../api/http';
import StepCompleteModal from '../completemodal/StepCompleteModal';

const SelectionCompleted: React.FC<SelectedCardProps> = ({ selectedCard }) => {
    const navigate = useNavigate();
    const [, setCurrentStep] = useRecoilState<number>(currentStepState);
    const [showModal, setShowModal] = useState(false);
    const handleSelect = async () => {
        try {
            await searchApi.post(`/api/plants/${selectedCard}/save`);
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/myplant');
                setCurrentStep(1);
            }, 1500);
        } catch (error: any) {
            console.error('에러 발생:', error);
            if (error.response) {
                console.error('서버 응답 데이터:', error.response.data);
            }
        }
    };
    return (
        <>
            
            <SelectionCompletedContainer>
            {showModal && <StepCompleteModal />}
                <SavePlantsButton
                    $isChecked={!selectedCard}
                    disabled={!selectedCard}
                    onClick={handleSelect}
                >
                    다음
                </SavePlantsButton>
            </SelectionCompletedContainer>
        </>
    );
};

export default SelectionCompleted;
