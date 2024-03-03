import React, { useState } from 'react';
import {
    SearchButton,
    SearchButtonContainer,
    SearchContainer,
    SearchIcon,
    SearchInput,
} from './RegistrationStepTwo.styles';
import SelectionCompleted from '../selection/SelectionCompleted';
import { Plants } from '../../../../../api/model';
import { currentStepState } from '../../../../../recoil/atom';
import { useRecoilState } from 'recoil';
import { useSearchPlants } from '../../../../../api/myplant/StepTwo';
import PlantDisplay from './plantdisplay/PlantDisplayCard';

export const RegistrationStepTwo: React.FC = () => {
    const [searchItem, setSearchItem] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<number>(); // 선택된 카드를 추적하기 위한 상태
    const [selectionCompleted, setSelectionCompleted] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useRecoilState<number>(currentStepState);
    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 6;
    const [, setPlants] = useState<Plants[]>([]);
    const { data: plantsData, isLoading, refetch: refetchPlants } = useSearchPlants(searchItem);
    const plants = Array.isArray(plantsData) ? plantsData : [];

    const handleSearch = () => {
        if (!searchItem) {
            setPlants([]);
            return;
        }
        setSelectionCompleted(true);
        setLoading(isLoading);
        refetchPlants();
        setLoading(false);
    };

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(event.currentTarget.value);
    };

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(plants?.length / itemsPerPage);

    // 이전 페이지로 이동하는 함수
    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    // 다음 페이지로 이동하는 함수
    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <>
            <SearchContainer>
                <SearchIcon src="./SearchIcon.svg" alt="SearchIcon" onClick={handleSearch} />
                <SearchInput
                    placeholder="식물 관련 키워드(이름/종류)를 검색해주세요"
                    name="plantAt"
                    value={searchItem}
                    onChange={searchHandler}
                />
            </SearchContainer>

            <PlantDisplay
                loading={loading}
                plants={plants}
                selectedCard={selectedCard}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalPages={totalPages}
                handleNextStep={handleNextStep}
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
                onCardClick={(plantId: number) => setSelectedCard(plantId)}
            />
            <SearchButtonContainer>
                {!selectionCompleted && (
                    <SearchButton
                        onClick={handleSearch}
                        $isChecked={!!searchItem}
                        disabled={!searchItem}
                    >
                        검색
                    </SearchButton>
                )}
                {selectionCompleted && (
                    <>
                        <SelectionCompleted selectedCard={selectedCard} />
                    </>
                )}
            </SearchButtonContainer>
        </>
    );
};
