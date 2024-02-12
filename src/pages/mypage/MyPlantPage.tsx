import React, { useState } from 'react';
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
import { PetPlant } from '../../api/User';
import { useModal } from '../../hook/useModal';

const MyPage: React.FC = () => {
    const { open, modalOpen, modalClose } = useModal();
    const [petPlant, setPetPlant] = useState<PetPlant>({
        name: '나팔꽃',
        image: 'https://north-east~~.png',
        date: new Date('2024-02-08'),
        title: '나의 첫 식물',
        content: '드디어 나팔꽃 씨앗을 구매했다~~',
    });

    const toggleButtons = () => {
        if (open) modalClose();
        else modalOpen();
    };
    // 요청을 받아서 petPlant 상태를 업데이트하는 함수
    // const handleRequest = (requestData) => {
    //     // requestData로부터 필요한 정보를 추출하여 새로운 상태를 생성
    //     const newPetPlant = {
    //         name: requestData.name,
    //         image: requestData.image,
    //         date: requestData.date,
    //         title: requestData.title,
    //         content: requestData.content,
    //     };

    //     // 새로운 상태로 petPlant 상태를 업데이트
    //     setPetPlant(newPetPlant);
    // };

    // 현재 날짜에서 입력받은 날짜를 뺀 d+day값 계산
    const currentDate = new Date();
    const petDate = new Date(petPlant.date);
    const timeDifference = currentDate.getTime() - petDate.getTime();
    const diffDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return (
        <div>
            <PetPlantHeader>
                <PetPlantHeaderTitle>나의 반려식물</PetPlantHeaderTitle>
                <PetPlantCardContainer>
                    <PetPlantHeaderImg></PetPlantHeaderImg>
                    <PetPlantHeaderDetail>
                        {`이미지 + ${diffDays}`} <br />
                        {petPlant.name} <br />
                        {petPlant.content}
                    </PetPlantHeaderDetail>
                </PetPlantCardContainer>
            </PetPlantHeader>

            <JournalContainer>
                <PetPlantDetailTitle>Quinoa Fruit Salad</PetPlantDetailTitle>
                <PetPlantDetailLine />
                <hr style={{ opacity: '30%' }} />
                <div style={{ margin: '20px 10px' }}>
                    <PetPlantDetailTextContainer>
                        <PetPlantIcon />
                        <PetPlantDetailText>반려식물은 어느 계절에 만났나요?</PetPlantDetailText>
                    </PetPlantDetailTextContainer>
                    <VerticalDivider />
                    <PetPlantDetailTextContainer>
                        <PetPlantIcon />
                        <PetPlantDetailText>반려 식물 집은 무슨 색깔인가요?</PetPlantDetailText>
                    </PetPlantDetailTextContainer>
                    <VerticalDivider />
                    <PetPlantDetailTextContainer>
                        <PetPlantIcon />
                        <PetPlantDetailText>
                            반려식물이 눈에 띄게 성장한 날이 있었나요?
                        </PetPlantDetailText>
                    </PetPlantDetailTextContainer>
                </div>

                <PlusButton $isChecked={open} onClick={toggleButtons}></PlusButton>
                {open && (
                    <>
                        <div className="dark-overlay"></div>
                        <PhotoButton />
                        <PlantButton />
                    </>
                )}
            </JournalContainer>
        </div>
    );
};

export default MyPage;
