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
    MyPlantToggle,
    MyPlantToggleDetail,
    MyPlantToggleContainer,
    MyPlantToggleButton,
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
import { useModal } from '../../hook/useModal';

const MyPage: React.FC = () => {
    const navigate = useNavigate();
    const { open, modalOpen, modalClose } = useModal();
    const [selectedDiaryId, setSelectedDiaryId] = useState<number>();
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
        return () => {
            setPetPlant([]);
        };
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

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`/api/diaries/${selectedDiaryId}`);
            setPetPlant((prevPetPlant) =>
                prevPetPlant.filter((plant) => plant.diaryId !== selectedDiaryId),
            );
            alert('삭제되었습니다.');
        } catch (error) {
            console.error(error);
        }
        setSelectedDiaryId(undefined);
        modalClose();
    };
    const handleModalOpen = (diaryId: number) => {
        setSelectedDiaryId(diaryId); // 선택된 다이어리 아이디 설정
        modalOpen();
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
                                        onClick={() => handleModalOpen(petPlant[index].diaryId)}
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
                        </JournalContainer>
                        {open && (
                            <div>
                                <div className="dark-overlay" />
                                <MyPlantToggle>
                                    <MyPlantToggleContainer>
                                        반려식물을 삭제하시겠습니까?
                                        <MyPlantToggleDetail>
                                            <MyPlantToggleButton
                                                $isChecked={true}
                                                onClick={() => modalClose()}
                                            >
                                                아니오
                                            </MyPlantToggleButton>
                                            <MyPlantToggleButton
                                                $isChecked={false}
                                                onClick={() => handleDeleteClick()}
                                            >
                                                예
                                            </MyPlantToggleButton>
                                        </MyPlantToggleDetail>
                                    </MyPlantToggleContainer>
                                </MyPlantToggle>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }
    return (
        <>
            {open && (
                <div>
                    <div className="dark-overlay" />
                    <MyPlantToggle>
                        <MyPlantToggleContainer>
                            반려식물을 삭제하시겠습니까?
                            <MyPlantToggleDetail>
                                <MyPlantToggleButton $isChecked={true} onClick={() => modalClose()}>
                                    아니오
                                </MyPlantToggleButton>
                                <MyPlantToggleButton
                                    $isChecked={false}
                                    onClick={() => handleDeleteClick()}
                                >
                                    예
                                </MyPlantToggleButton>
                            </MyPlantToggleDetail>
                        </MyPlantToggleContainer>
                    </MyPlantToggle>
                </div>
            )}
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
                                        onClick={() => handleModalOpen(petPlant[index].diaryId)}
                                    />
                                </ButtonContainer>
                            </PlantUpdateContainer>
                            <PetPlantCardContainer>
                                <PetPlantHeaderImgContainer>
                                    <PetPlantHeaderImg src={plant.image} />
                                </PetPlantHeaderImgContainer>
                                <PetPlantHeaderContainer>
                                    <>
                                        <img src="./calendar_clock.svg" /> {` +  ${diffDays}`}
                                    </>
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
                        </JournalContainer>
                    </div>
                ))}
            </PlantSlickCustom>
        </>
    );
};

export default MyPage;
