import React, { useState } from 'react';
import { PagesContainer, SearchButton, SearchButtonContainer, SearchContainer, SearchInput } from './RegistrationStepTwo.styles';
import { HomeRecent } from './PlantCard.styles';
import SearchCompleted from '../searchcompleted/SearchCompleted';
import { searchApi } from '../../../../../api/http';

export const RegistrationStepTwo: React.FC = () => {
    const [searchItem, setSearchItem] = useState<string>('');

    const [selectedCard, setSelectedCard] = useState<string>(); // 선택된 카드를 추적하기 위한 상태
    const [searchCompleted, setSearchCompleted] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 6;
    const [plants, setPlants] = useState([
        {
            plantId: '0',
            name: '나팔꽃',
            image: './plantimg.png',
            content: '물은 몇번 주어야 한다.',
        },
        
    ]);

    const handleSearch = async () => {
       
        try {
            const response = await searchApi.get(`/api/plants/serch?query=${searchItem}`);
            console.log(response);
            setPlants(response.data.data);
            setSearchCompleted(true);
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

    const handleCardClick = (plantId: string) => {
        setSelectedCard(plantId); // 선택된 카드 업데이트
    };

    // 재 검색
    const handleReSearch = () => {
        setSearchCompleted(false);
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
                                    plant.plantId === selectedCard ? 'selected' : ''
                                }`}
                                key={plant.plantId}
                                onClick={() => handleCardClick(plant.plantId)}
                            >
                                <img src={plant.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-title">{plant.name}</p>
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
                {!searchCompleted && (
                    <SearchButton onClick={handleSearch} $isChecked={!searchCompleted}>
                        검색
                    </SearchButton>
                )}
                {searchCompleted &&<>
                <PagesContainer>
                <button onClick={handleReSearch}>재검색</button>
                </PagesContainer>
                <SearchCompleted selectedCard={selectedCard} />
                </>
                }
            </SearchButtonContainer>
        </>
    );
};
