import React from 'react';
import { useNavigate } from 'react-router-dom';
import { currentStepState } from '../../../../../recoil/atom';
import { useRecoilState } from 'recoil';
import {
    FindOtherPlantsButton,
    SavePlantsButton,
    SearchCompletedContainer,
} from './SearchCompleted.styles';
import { SelectedCardProps } from '../../../../../api/model';
import { searchresultsApi } from '../../../../../api/http';

const SearchCompleted: React.FC<SelectedCardProps> = ({ selectedCard }) => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useRecoilState<number>(currentStepState);
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleSelect = async () => {
        try {
            await searchresultsApi.post(`/api/plants/${selectedCard}/save`);
            navigate('/myplant');
        } catch (error: any) {
            // 에러 처리
            console.error('에러 발생:', error);
            if (error.response) {
                console.error('서버 응답 데이터:', error.response.data);
            }
        }
    };
    return (
        <SearchCompletedContainer>
            <FindOtherPlantsButton onClick={handleNextStep}>
                관련 식물이 없어요
            </FindOtherPlantsButton>
            <SavePlantsButton
                $isChecked={!selectedCard}
                disabled={!selectedCard}
                onClick={handleSelect}
            >
                네, 찾았어요
            </SavePlantsButton>
        </SearchCompletedContainer>
    );
};

export default SearchCompleted;
