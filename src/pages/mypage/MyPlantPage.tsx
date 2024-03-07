import React, { useEffect, useState } from 'react';
import {
    VerticalDivider,
    JournalContainer,
    PetPlantDetailText,
    PetPlantDetailTextContainer,
    PetPlantDetailTitle,
    PetPlantIcon,
    PetPlantHeaderImg,
    PetPlantHeader,
    PetPlantHeaderTitle,
    PlantButton,
    PetPlantHeaderImgContainer,
    JournalBody,
    PlantUpdateContainer,
    DeleteButton,
    ButtonContainer,
    PlantSlickCustom,
    PetPlantContainer,
    PetPlantBorder,
    PetPlantDetailContainer,
    StyledImageContainer,
    StyledWrapper,
    PlantName,
    PlantContent,
    JournalTitle,
    JournalHeaderContainer,
    AnswerTextWrapper,
} from './MyPlantPage.styles';
import { DiaryEntry } from '../../api/model';
import { http, myplantApi } from '../../api/http';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import EmptyMyPlant from './empty/EmptyMyPlant';
// import { PagesButton, PagesContainer } from './registration/step/steptwo/PageNation';
import { useRecoilState } from 'recoil';
import { myplantPageState } from '../../recoil/atom';
import { useModal } from '../../hook/useModal';
import DeletePlantModal from './plantmodal/DeletePlantModal';

const MyPage: React.FC = () => {
    const navigate = useNavigate();
    const { open, modalOpen, modalClose } = useModal();
    const [selectedDiaryId, setSelectedDiaryId] = useState<number>();
    const [currentPage, setCurrentPage] = useRecoilState(myplantPageState);
    const handleBeforeChange = (newIndex: number) => {
        setCurrentPage(newIndex);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: currentPage,
        arrow: false,
        afterChange: handleBeforeChange,
    };

    // const itemsPerPage = 1;

    const [petPlant, setPetPlant] = useState<DiaryEntry[]>([]);

    const handleIconClick = (templateId: number, question: string, answer: string) => {
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

    const IconAndText = ({ template, iconSrc }) => (
        <PetPlantDetailTextContainer
            onClick={() =>
                handleIconClick(template.id, template.Templelate.question, template.answer)
            }
        >
            <PetPlantIcon src={iconSrc} style={{ width: '18px', height: '18px' }} />
            <PetPlantDetailText>
                {template.Templelate.question}
                <br />
                <AnswerTextWrapper>
                    {template.answer ? (
                        <span>{template.answer}</span>
                    ) : (
                        <span>질문에 답해주세요</span>
                    )}
                </AnswerTextWrapper>
            </PetPlantDetailText>
        </PetPlantDetailTextContainer>
    );

    const handleDeleteClick = async () => {
        try {
            await http.delete(`/api/diaries/${selectedDiaryId}`);
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

    return (
        <>
            {open && (
                <DeletePlantModal handleDeleteClick={handleDeleteClick} modalClose={modalClose} />
            )}
            <PetPlantHeaderTitle>나의 반려식물</PetPlantHeaderTitle>
            <PlantSlickCustom {...settings}>
                {petPlant.map((plant, index) => {
                    return (
                        <PetPlantContainer key={index}>
                            <PetPlantBorder>
                                <PetPlantHeader>
                                    <PlantUpdateContainer>
                                        <div></div>
                                        <ButtonContainer>
                                            <PlantButton onClick={handleRegisterClick} />
                                            <DeleteButton
                                                onClick={() =>
                                                    handleModalOpen(petPlant[index].diaryId)
                                                }
                                            />
                                        </ButtonContainer>
                                    </PlantUpdateContainer>
                                    <PetPlantHeaderImgContainer>
                                        <PetPlantHeaderImg src={plant.image} />
                                    </PetPlantHeaderImgContainer>
                                </PetPlantHeader>

                                <PetPlantDetailContainer>
                                    <StyledWrapper>
                                        <div></div>
                                        <StyledImageContainer>
                                            <img
                                                src="./calendar_clock.svg"
                                                style={{
                                                    marginRight: '5px',
                                                    width: '16px',
                                                    height: '17px',
                                                }}
                                            />{' '}
                                            {` +  ${diffDays}`}
                                        </StyledImageContainer>
                                    </StyledWrapper>
                                    <PetPlantDetailTitle>{plant.name}</PetPlantDetailTitle>
                                    <PlantName>{plant.UserPlant?.Plant?.plantName}</PlantName>
                                    {/* <div>{plant.UserPlant?.Plant?.type}</div> */}
                                    <PlantContent>{plant.UserPlant?.Plant?.content}</PlantContent>
                                </PetPlantDetailContainer>

                                <JournalContainer>
                                    <JournalHeaderContainer>
                                        <img
                                            src="/JournalTitleImg.svg"
                                            style={{ width: '18px', height: '18px' }}
                                        />
                                        <JournalTitle>반려 식물 일지</JournalTitle>
                                    </JournalHeaderContainer>
                                    <JournalBody>
                                        <div>
                                            <VerticalDivider />
                                            {plant.SavedTemplelates?.length > 0 && (
                                                <>
                                                    <IconAndText
                                                        template={plant.SavedTemplelates[0]}
                                                        iconSrc={`/LogIcon1.svg`}
                                                    />
                                                </>
                                            )}
                                            {plant.SavedTemplelates?.length > 1 && (
                                                <>
                                                    <IconAndText
                                                        template={plant.SavedTemplelates[1]}
                                                        iconSrc={`/LogIcon2.svg`}
                                                    />
                                                </>
                                            )}
                                            {plant.SavedTemplelates?.length > 2 && (
                                                <IconAndText
                                                    template={plant.SavedTemplelates[2]}
                                                    iconSrc={`/LogIcon3.svg`}
                                                />
                                            )}
                                        </div>
                                    </JournalBody>
                                </JournalContainer>
                            </PetPlantBorder>
                        </PetPlantContainer>
                    );
                })}
            </PlantSlickCustom>
        </>
    );
};

export default MyPage;
