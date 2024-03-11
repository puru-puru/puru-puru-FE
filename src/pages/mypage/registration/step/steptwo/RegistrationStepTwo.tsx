import React, { useEffect, useRef, useState, useCallback } from 'react';
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
    const { data: plantsData, refetch: refetchPlants } = useSearchPlants(searchItem);
    const plants = Array.isArray(plantsData) ? plantsData : [];

    const prevSearchItemRef = useRef<string>('');

    const handleSearchDebounced = useCallback(async () => {
        if (!searchItem) {
            setPlants([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            if (searchItem !== prevSearchItemRef.current) {
                await refetchPlants();
                prevSearchItemRef.current = searchItem;
            }
            setSelectionCompleted(true);
        } catch (error) {
            alert('검색 중 오류 발생');
        } finally {
            setLoading(false);
        }
    }, [refetchPlants, searchItem]);

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setSearchItem(inputValue);
        if (!inputValue && selectedCard) {
            setSelectionCompleted(false);
        } else {
            setSelectionCompleted(true); // 입력값이 있는 경우에만 true로 설정
        }
        if (searchItem !== inputValue) {
            // 상태가 즉시 바뀌는게 아니라 비동기적으로 이루어 지기 때문에 searchItem은 이전값
            setSelectedCard(undefined); // 검색어를 지웠을 경우 선택 해제
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handleSearchDebounced();
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [handleSearchDebounced, searchItem]);

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
    const MemoizedPlantDisplay = React.memo(PlantDisplay);
    return (
        <>
            <SearchContainer>
                <SearchIcon
                    src="./SearchIcon.svg"
                    alt="SearchIcon"
                    onClick={handleSearchDebounced}
                />
                <SearchInput
                    placeholder="식물 관련 키워드(이름/종류)를 검색해주세요"
                    name="plantAt"
                    value={searchItem}
                    onChange={searchHandler}
                />
            </SearchContainer>

            <MemoizedPlantDisplay
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
                {!selectionCompleted ? (
                    <SearchButton
                    onClick={handleSearchDebounced}
                        $isChecked={!!searchItem}
                        disabled={!searchItem}
                    >
                        검색
                    </SearchButton>
                ) : (
                    <SelectionCompleted selectedCard={selectedCard} />
                )}
            </SearchButtonContainer>
        </>
    );
};
