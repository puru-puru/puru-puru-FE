import React, { useEffect, useState } from 'react';
import {
    VerticalDivider,
    JournalContainer,
    PetPlantCardContainer,
    PetPlantHeaderContainer,
    PetPlantDetailLine,
    PetPlantDetailText,
    PetPlantDetailTextContainer,
    PetPlantDetailTitle,
    PetPlantIcon,
    PetPlantHeaderImg,
    PetPlantHeader,
    PetPlantHeaderTitle,
    PlantButton,
    PetPlantHeaderImgContainer,
    JournalHeader,
    JournalBody,
    PlantUpdateContainer,
    DeleteButton,
    ButtonContainer,
    PlantSlickCustom,
    DotsCustom,
    PetPlantHeaderSubTitle,
} from './MyPlantPage.styles';
import { DiaryEntry } from '../../api/model';
import { axios, myplantApi } from '../../api/http';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import EmptyMyPlant from './registration/EmptyMyPlant';
// import { PagesButton, PagesContainer } from './registration/step/steptwo/PageNation';
import { useRecoilState } from 'recoil';
import { myplantPageState } from '../../recoil/atom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyPage: React.FC = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useRecoilState(myplantPageState);
    const handleBeforeChange = (newIndex: number) => {
        setCurrentPage(newIndex);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: currentPage,
        appendDots: (dots: any) => (
            <div
                style={{
                    position: 'absolute',
                    left: '-5%',
                    bottom: '0%',
                    width: '100%',
                }}
            >
                <DotsCustom> {dots} </DotsCustom>
            </div>
        ),
        afterChange: handleBeforeChange,
    };

    // const itemsPerPage = 1;

    const [petPlant, setPetPlant] = useState<DiaryEntry[]>([]);

    const handleIconClick = (templateId: string, question: string, answer: string) => {
        // 아이콘을 클릭하여 MyComponent 페이지로 이동
        navigate('/mycomponent', { state: { templateId, question, answer } });
    };

    const {
        data: petPlantDate,
        isLoading,
        isError,
    } = useQuery(['petPlant'], () => myplantApi.get('/api/diaries'));

    useEffect(() => {
        if (petPlantDate) {
            if (Array.isArray(petPlantDate)) {
                setPetPlant(petPlantDate);
            }
        }
    }, [petPlantDate, setPetPlant]);

    if (isLoading) return <div>로딩중</div>;
    if (isError) return <div>Error occurred.</div>;

    const handleRegisterClick = () => {
        navigate('/plants');
    };

    // // 전체 페이지 수 계산
    // const totalPages = Math.ceil(petPlant.length / itemsPerPage);

    // // 이전 페이지로 이동하는 함수
    // const goToPreviousPage = () => {
    //     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    // };

    // // 다음 페이지로 이동하는 함수
    // const goToNextPage = () => {
    //     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    // };

    const IconAndText = ({ template }) => (
        <PetPlantDetailTextContainer
            onClick={() =>
                handleIconClick(template.id, template.Templelate.question, template.answer)
            }
        >
            <PetPlantIcon src={`plantimg.png`} />
            <PetPlantDetailText>
                {template.Templelate.question}
                <br />
                {template.answer && <span style={{ opacity: '0.5' }}>{template.answer}</span>}
            </PetPlantDetailText>
        </PetPlantDetailTextContainer>
    );

    const handleDeleteClick = async (diaryId: number) => {
        try {
            await axios.delete(`/api/diaries/${diaryId}`);
            setPetPlant((prevPetPlant) =>
                prevPetPlant.filter((plant) => plant.diaryId !== diaryId),
            );
            alert('삭제되었습니다.');
        } catch (error) {
            console.error(error);
        }
    };

    // 현재 날짜에서 입력받은 날짜를 뺀 d+day값 계산
    const currentDate = new Date();
    const petDate = new Date(petPlant[currentPage]?.plantAt);
    const timeDifference = currentDate.getTime() - petDate.getTime();
    const diffDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    if (petPlant.length === 0) return <EmptyMyPlant />;
    if (petPlant.length === 1) {
        return (
            <div>
                {petPlant.map((plant, index) => (
                    <div key={index}>
                        <PetPlantHeader>
                            <PetPlantHeaderTitle>나의 반려식물</PetPlantHeaderTitle>
                            <PlantUpdateContainer>
                                <div></div>
                                <ButtonContainer>
                                    <PlantButton onClick={handleRegisterClick} />
                                    <DeleteButton
                                        onClick={() => handleDeleteClick(petPlant[index].diaryId)}
                                    />
                                </ButtonContainer>
                            </PlantUpdateContainer>
                            <PetPlantCardContainer>
                                <PetPlantHeaderImgContainer>
                                    <PetPlantHeaderImg src={plant.image} />
                                </PetPlantHeaderImgContainer>
                                <PetPlantHeaderContainer>
                                    <img src="./calendar_clock.svg" /> {` +  ${diffDays}`}
                                    <PetPlantHeaderSubTitle>이름</PetPlantHeaderSubTitle>
                                    {plant.UserPlant?.Plant?.plantName} <br />
                                    <PetPlantHeaderSubTitle>종류</PetPlantHeaderSubTitle>
                                    {plant.UserPlant?.Plant?.type} <br />
                                    <PetPlantHeaderSubTitle>정보</PetPlantHeaderSubTitle>
                                    {plant.UserPlant?.Plant?.content}
                                </PetPlantHeaderContainer>
                            </PetPlantCardContainer>
                            <JournalHeader>
                                <PetPlantDetailTitle>{plant.name}</PetPlantDetailTitle>
                                <PetPlantDetailLine />
                            </JournalHeader>
                        </PetPlantHeader>
                        <JournalContainer>
                            <JournalBody>
                                <div>
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
                            </JournalBody>
                            {/* <PagesContainer>
                        <PagesButton
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
                        >
                            이전
                        </PagesButton>
                        {currentPage} / {totalPages}
                        <PagesButton
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
                        >
                            다음
                        </PagesButton>
                    </PagesContainer> */}
                        </JournalContainer>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <PlantSlickCustom {...settings}>
            {petPlant.map((plant, index) => (
                <div key={index}>
                    <PetPlantHeader>
                        <PetPlantHeaderTitle>나의 반려식물</PetPlantHeaderTitle>
                        <PlantUpdateContainer>
                            <div></div>
                            <ButtonContainer>
                                <PlantButton onClick={handleRegisterClick} />
                                <DeleteButton
                                    onClick={() => handleDeleteClick(petPlant[index].diaryId)}
                                />
                            </ButtonContainer>
                        </PlantUpdateContainer>
                        <PetPlantCardContainer>
                            <PetPlantHeaderImgContainer>
                                <PetPlantHeaderImg src={plant.image} />
                            </PetPlantHeaderImgContainer>
                            <PetPlantHeaderContainer>
                                <img src="./calendar_clock.svg" /> {` +  ${diffDays}`}
                                <PetPlantHeaderSubTitle>이름</PetPlantHeaderSubTitle>
                                {plant.UserPlant?.Plant?.plantName} <br />
                                <PetPlantHeaderSubTitle>종류</PetPlantHeaderSubTitle>
                                {plant.UserPlant?.Plant?.type} <br />
                                <PetPlantHeaderSubTitle>정보</PetPlantHeaderSubTitle>
                                {plant.UserPlant?.Plant?.content}
                            </PetPlantHeaderContainer>
                        </PetPlantCardContainer>
                        <JournalHeader>
                            <PetPlantDetailTitle>{plant.name}</PetPlantDetailTitle>
                            <PetPlantDetailLine />
                        </JournalHeader>
                    </PetPlantHeader>
                    <JournalContainer>
                        <JournalBody>
                            <div>
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
                        </JournalBody>
                        {/* <PagesContainer>
                            <PagesButton
                                onClick={goToPreviousPage}
                                disabled={currentPage === 1}
                                style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
                            >
                                이전
                            </PagesButton>
                            {currentPage} / {totalPages}
                            <PagesButton
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
                            >
                                다음
                            </PagesButton>
                        </PagesContainer> */}
                    </JournalContainer>
                </div>
            ))}
        </PlantSlickCustom>
    );
};

export default MyPage;
