import React, { useState } from 'react';
import {
    FindOtherPlantsButton,
    FindOtherPlantsContainer,
    RecommendedSearchWords,
    RecommendedSearchWordsContainer,
    RecommendedSearchWordsText,
    SearchButton,
    SearchButtonContainer,
    SearchContainer,
    SearchIcon,
    SearchInput,
} from './RegistrationStepTwo.styles';
import { HomeRecent } from './PlantCard.styles';
import SelectionCompleted from '../selection/SelectionCompleted';
import { searchApi } from '../../../../../api/http';
import { Plants } from '../../../../../api/model';
import Spinner from '/Spin.gif';

import { PagesContainer } from './PageNation';
import { currentStepState } from '../../../../../recoil/atom';
import { useRecoilState } from 'recoil';

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
    const [plants, setPlants] = useState<Plants[]>([]);

    const handleSearch = async () => {
        setSelectionCompleted(true);
        setLoading(true);
        try {
            const response = await searchApi.get(`/api/plants/search/${searchItem}`);
            console.log(response)
            if (Array.isArray(response)) {
                setPlants(response);
            } else {
                console.error('서버에서 반환된 데이터가 배열이 아닙니다:', response);
                setPlants([]);
            }
        } catch (error: any) {
            // 에러 처리
            console.error('에러 발생:', error);
            if (error.response) {
                console.error('서버 응답 데이터:', error.response.data);
                setPlants([]); // 검색 결과가 없을 경우 빈 배열로 초기화
            }
        } finally {
            setLoading(false);
        }
    };

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(event.currentTarget.value);
    };

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(plants.length / itemsPerPage);

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

            <HomeRecent>
                {loading ? (
                    <img
                        src={Spinner}
                        alt="loding"
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100px',
                            height: '100px',
                        }}
                    />
                ) : (
                    <>
                        {!plants.length ? ( // 검색어가 없을 때만 추천 검색어 표시
                            <>
                                <div
                                    style={{
                                        marginTop: '30px',
                                        borderTop: '2px solid rgba(128, 128, 128, 0.2)',
                                    }}
                                >
                                    <RecommendedSearchWordsText>
                                        추천 검색어
                                    </RecommendedSearchWordsText>
                                    <RecommendedSearchWordsContainer>
                                        {[
                                            '관엽식물',
                                            '스투키',
                                            '몬스테라',
                                            '동백나무',
                                            '히아신스',
                                            '틸란드시아',
                                            '필로덴드론',
                                        ].map((recommendation, index) => (
                                            <RecommendedSearchWords key={index}>
                                                {recommendation}
                                            </RecommendedSearchWords>
                                        ))}
                                    </RecommendedSearchWordsContainer>
                                </div>
                            </>
                        ) : (
                            <>
                                <FindOtherPlantsContainer>
                                    <div></div>
                                    <FindOtherPlantsButton onClick={handleNextStep}>
                                        관련 식물이 없어요
                                    </FindOtherPlantsButton>
                                </FindOtherPlantsContainer>

                                <div className="card-group">
                                    {plants
                                        .slice(
                                            (currentPage - 1) * itemsPerPage,
                                            currentPage * itemsPerPage,
                                        )
                                        .map((plant) => (
                                            <div
                                                className={`card ${
                                                    plant.plantsId === selectedCard
                                                        ? 'selected'
                                                        : ''
                                                }`}
                                                key={plant.plantsId}
                                                onClick={() => setSelectedCard(plant.plantsId)}
                                            >
                                                <img
                                                    src={plant.image}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <p className="card-title">{plant.plantName}</p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </>
                        )}
                    </>
                )}
                {plants.length !== 0 && (
                    <PagesContainer>
                        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                            이전
                        </button>
                        {currentPage} / {totalPages}
                        {/* 다음 페이지로 이동하는 버튼 */}
                        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                            다음
                        </button>
                    </PagesContainer>
                )}
            </HomeRecent>

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
