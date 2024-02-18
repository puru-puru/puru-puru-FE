import React, { useState } from 'react';
import { PagesContainer, SearchButton, SearchButtonContainer, SearchContainer, SearchInput } from './RegistrationStepTwo.styles';
import { HomeRecent } from './PlantCard.styles';
import SelectionCompleted from '../selection/SelectionCompleted';
import { searchApi } from '../../../../../api/http';
import { Plants } from '../../../../../api/model';

export const RegistrationStepTwo: React.FC = () => {
    const [searchItem, setSearchItem] = useState('');

    const [selectedCard, setSelectedCard] = useState<number>(); // 선택된 카드를 추적하기 위한 상태
    const [selectionCompleted, setSelectionCompleted] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 6;
    const [plants, setPlants] = useState<Plants[]>([]);
    

    const handleSearch = async () => {
        setSelectionCompleted(true);
        try {
            const response = await searchApi.get(`/api/plants/search/${searchItem}`);
            console.log(response); 
            if (Array.isArray(response)) {
                setPlants(response);
            } else {
                console.error('서버에서 반환된 데이터가 배열이 아닙니다:', response);
            }
            
        } catch (error: any) {
            // 에러 처리
            console.error('에러 발생:', error);
            if (error.response) {
                console.error('서버 응답 데이터:', error.response.data);
            }
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
                <SearchInput
                    placeholder="식물 관련 키워드(이름/종류)를 검색해주세요"
                    name="plantAt"
                    value={searchItem}
                    onChange={searchHandler}
                />
            </SearchContainer>

            {/* 현재 페이지에 해당하는 항목만 렌더링 */}
            <HomeRecent>
                <div className="card-group">
                    {plants
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((plant) => (
                            <div
                                className={`card ${
                                    plant.plantsId === selectedCard ? 'selected' : ''
                                }`}
                                key={plant.plantsId}
                                onClick={() => setSelectedCard(plant.plantsId)}
                            >
                                <img src={plant.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-title">{plant.plantName}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </HomeRecent>
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
            {/* 이전 페이지로 이동하는 버튼 */}
            



            <SearchButtonContainer>
                {!selectionCompleted && (
                    <SearchButton onClick={handleSearch} $isChecked={!selectionCompleted}>
                        검색
                    </SearchButton>
                )}
                {selectionCompleted &&<>
                <PagesContainer>
                <button onClick={() => setSelectionCompleted(false)}>재검색</button>
                </PagesContainer>
                <SelectionCompleted selectedCard={selectedCard} />
                </>
                }
            </SearchButtonContainer>
        </>
    );
};
