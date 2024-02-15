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
    PetPlantRegister,
    PetPlantRegisterBotten,
    PetPlantRegisterText,
} from './MyPlantPage.styles';
import { DiaryEntry } from '../../api/User';
import { useModal } from '../../hook/useModal';
import { myplantApi } from '../../api/http';
import { useNavigate } from 'react-router-dom';

const MyPage: React.FC = () => {
    const navigate = useNavigate();
    const { open, modalOpen, modalClose } = useModal();
    const [petPlant, setPetPlant] = useState<DiaryEntry>({
        diaryId: 8,
        image: './plantimg.png',
        name: '나의 동반자',
        plantAt: '2024-02-15',
        UserPlant: {
            userplantId: 1,
            Plant: {
                plantName: '자엽풍년화',
                type: '조록나무과',
                content:
                    '개성적인 색깔과 모양. 봄에 알록달록한 색깔의 꽃을 핀다. 햇빛과 통풍이 잘 드는 곳에 놓아야 할 것.',
            },
        },
        SavedTemplelates: [
            {
                id: 7,
                answer: '질문에 답해주세요',
                Templelate: {
                    question: '반려식물은 어느 계절에 만났나요?',
                },
            },
            {
                id: 8,
                answer: '질문에 답해주세요',
                Templelate: {
                    question: '반려 식물 집은 무슨 색깔인가요?',
                },
            },
            {
                id: 9,
                answer: '해당 식물은 1년에 한번 꽃이 펴요',
                Templelate: {
                    question: '반려식물은 주기적으로 꽃을 피나요?',
                },
            },
        ],
    });

    const handleIconClick = (templateId: string, question: string, answer: string) => {
        // 아이콘을 클릭하여 MyComponent 페이지로 이동합니다.
        const { diaryId } = petPlant;
        navigate('/mycomponent', { state: { diaryId, templateId, question, answer } });
      };
    
    const toggleButtons = () => {
        if (open) modalClose();
        else modalOpen();
    };
    useEffect(() => {
        // async 함수 정의
        const fetchData = async () => {
            try {
                // Axios를 사용하여 데이터를 가져오기
                const response = await myplantApi.get('/api/plants'); // URL은 실제 db.json 파일의 위치로 변경해야 합니다.
                console.log(response);
                // 응답 데이터에서 petPlant를 추출하고 상태 업데이트
                setPetPlant(response.date[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // fetchData 함수 호출
        fetchData();
    }, []);

    const IconAndText = ({ template }) => (
        <PetPlantDetailTextContainer>
            <PetPlantIcon
                onClick={() =>
                    handleIconClick(template.id, template.Templelate.question, template.answer)
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
    const petDate = new Date(petPlant.plantAt);
    const timeDifference = currentDate.getTime() - petDate.getTime();
    const diffDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    if (!petPlant)
        return (
            <>
                <PetPlantHeader>
                    <PetPlantHeaderTitle>나의 반려식물</PetPlantHeaderTitle>
                    <PetPlantRegisterText>
                        등록된 식물이 없어요! 식물을 먼저 등록해주세요
                    </PetPlantRegisterText>
                </PetPlantHeader>
                <PetPlantRegister>
                    <PetPlantHeaderImg
                        style={{ backgroundImage: `url(plantimg.png)`, marginTop: '100px' }}
                    />
                    <PetPlantRegisterBotten>등록하기</PetPlantRegisterBotten>
                </PetPlantRegister>
            </>
        );
    return (
        <div>
            <PetPlantHeader>
                <PetPlantHeaderTitle>나의 반려식물</PetPlantHeaderTitle>
                <PetPlantCardContainer>
                    <PetPlantHeaderImg
                        style={{ backgroundImage: `url${petPlant.image}` }}
                    ></PetPlantHeaderImg>
                    <PetPlantHeaderDetail>
                        <img src="./calendar_clock.svg" />
                        {` +  ${diffDays}`} <br />
                        {petPlant.UserPlant.Plant.plantName} <br />
                        {petPlant.UserPlant.Plant.type} <br />
                        {petPlant.UserPlant.Plant.content}
                    </PetPlantHeaderDetail>
                </PetPlantCardContainer>
            </PetPlantHeader>

            <JournalContainer>
                <PetPlantDetailTitle>{petPlant.name}</PetPlantDetailTitle>
                <PetPlantDetailLine />
                <hr style={{ opacity: '30%' }} />
                <div style={{ margin: '20px 10px' }}>
                    <IconAndText template={petPlant.SavedTemplelates[0]} />
                    <VerticalDivider />
                    <IconAndText template={petPlant.SavedTemplelates[1]} />
                    <VerticalDivider />
                    <IconAndText template={petPlant.SavedTemplelates[2]} />
                </div>
                {/* 플러스 버튼(갤러리, 식물추가) */}
                {open && (
                    <>
                        <div className="dark-overlay"></div>
                        <PhotoButton />
                        <PlantButton />
                    </>
                )}
                <PlusButton $isChecked={open} onClick={toggleButtons}></PlusButton>
            </JournalContainer>
        </div>
    );
};

export default MyPage;
