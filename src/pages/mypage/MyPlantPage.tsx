import React, { useEffect, useState } from 'react';
import {
    VerticalDivider,
    JournalContainer,
    PetPlantCardContainer,
    PetPlantHeaderDetail,
    PetPlantDetailLine,
    PetPlantDetailText,
    PetPlantDetailTextContainer,
    PetPlantDetailTitle,
    PetPlantIcon,
    PetPlantHeaderImg,
    PetPlantHeader,
    PetPlantHeaderTitle,
    PlusButton,
    PhotoButton,
    PlantButton,
} from './MyPlantPage.styles';
import { DiaryEntry } from '../../api/model';
import { useModal } from '../../hook/useModal';
import { myplantApi } from '../../api/http';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import EmptyMyPlant from './registration/EmptyMyPlant';
import { PagesButton, PagesContainer } from './registration/step/steptwo/PageNation';
import { useRecoilState } from 'recoil';
import { myplantPageState } from '../../recoil/atom';


const MyPage: React.FC = () => {
    const navigate = useNavigate();
    const { open, modalOpen, modalClose } = useModal();
    const [currentPage, setCurrentPage] = useRecoilState(myplantPageState);
    const itemsPerPage = 1;

    

    const [petPlant, setPetPlant] = useState<DiaryEntry[]>([]);

    const handleIconClick = (diaryId: string, templateId: string, question: string, answer: string) => {
        // 아이콘을 클릭하여 MyComponent 페이지로 이동
        navigate('/mycomponent', { state: { diaryId, templateId, question, answer } });
    };

    // 갤러리 및 추가 버튼
    const toggleButtons = () => {
        if (open) modalClose();
        else modalOpen();
    };
    const {
        data: petPlantDate,
        isLoading,
        isError,
    } = useQuery(['petPlant'], () => myplantApi.get('/api/diaries'));

    useEffect(() => {
        if (petPlantDate) {
            console.log(petPlantDate);
            if (Array.isArray(petPlantDate)) {
                setPetPlant(petPlantDate);
            }
        }
    }, [petPlantDate]);

    if (isLoading) return <div>로딩중</div>;
    if (isError) return <div>Error occurred.</div>;

    const handleRegisterClick = () => {
        navigate('/plants');
    };

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(petPlant.length / itemsPerPage);

    // 이전 페이지로 이동하는 함수
    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    // 다음 페이지로 이동하는 함수
    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const IconAndText = ({ template }) => (
        <PetPlantDetailTextContainer>
            <PetPlantIcon
                src={`plantimg.png`}
                onClick={() =>
                    handleIconClick(template.diaryId, template.id, template.Templelate.question, template.answer)
                }
            />
            <PetPlantDetailText>
                {template.Templelate.question}
                <br />
                <span style={{ opacity: '0.5' }}>{template.answer}</span>
            </PetPlantDetailText>
        </PetPlantDetailTextContainer>
    );

    // 현재 날짜에서 입력받은 날짜를 뺀 d+day값 계산
    const currentDate = new Date();
    const petDate = new Date(petPlant[currentPage-1]?.plantAt);
    const timeDifference = currentDate.getTime() - petDate.getTime();
    const diffDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    if (petPlant.length === 0) return <EmptyMyPlant />;
    return (
        <div>
            <PagesContainer>
                <PagesButton onClick={goToPreviousPage} disabled={currentPage === 1}>
                    이전
                </PagesButton>
                {currentPage} / {totalPages}
                {/* 다음 페이지로 이동하는 버튼 */}
                <PagesButton onClick={goToNextPage} disabled={currentPage === totalPages}>
                    다음
                </PagesButton>
            </PagesContainer>
            {petPlant
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((plant, index) => (
                    <div key={index}>
                        <PetPlantHeader>
                            <PetPlantHeaderTitle>나의 반려식물</PetPlantHeaderTitle>
                            <PetPlantCardContainer>
                                <PetPlantHeaderImg src={plant.image} />
                                <PetPlantHeaderDetail>
                                    <img src="./calendar_clock.svg" />
                                    {` +  ${diffDays}`} 
                                    {plant.UserPlant?.Plant?.plantName} <br />
                                    {plant.UserPlant?.Plant?.type} <br />
                                    {plant.UserPlant?.Plant?.content}
                                </PetPlantHeaderDetail>
                            </PetPlantCardContainer>
                        </PetPlantHeader>

                        <JournalContainer>
                            <PetPlantDetailTitle>{plant.name}</PetPlantDetailTitle>
                            <PetPlantDetailLine />
                            <hr style={{ opacity: '30%' }} />
                            <div style={{ margin: '20px 10px' }}>
                                {plant.SavedTemplelates?.length > 0 && (
                                    <>
                                        <IconAndText template={plant.SavedTemplelates[0]} />
                                        <VerticalDivider />
                                    </>
                                )}
                                {plant.SavedTemplelates?.length > 1 && (
                                    <>
                                        <IconAndText template={plant.SavedTemplelates[1]} />
                                        <VerticalDivider />
                                    </>
                                )}
                                {plant.SavedTemplelates?.length > 2 && (
                                    <IconAndText template={plant.SavedTemplelates[2]} />
                                )}
                            </div>
                        </JournalContainer>
                    </div>
                ))}

            {/* 플러스 버튼(갤러리, 식물추가) */}
            {open && (
                <>
                    <div className="dark-overlay"></div>
                    <PhotoButton />
                    <PlantButton onClick={handleRegisterClick} />
                </>
            )}
            <PlusButton $isChecked={open} onClick={toggleButtons}></PlusButton>
        </div>
    );
};

export default MyPage;
