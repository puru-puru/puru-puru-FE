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
import { PetPlant } from '../../api/User';
import { useModal } from '../../hook/useModal';
import { myplantApi } from '../../api/http';

const MyPage: React.FC = () => {
    const { open, modalOpen, modalClose } = useModal();
    const [petPlant, setPetPlant] = useState<PetPlant>({
        name: '나팔꽃',
        image: 'url(plantimg.png)',
        date: new Date('2024-02-08'),
        title: '나의 첫 식물',
        content: '드디어 나팔꽃 씨앗을 구매했다~~',
    });

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
                const data = response;
                setPetPlant(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // fetchData 함수 호출
        fetchData();
    }, []);

    // 현재 날짜에서 입력받은 날짜를 뺀 d+day값 계산
    const currentDate = new Date();
    const petDate = new Date(petPlant.date);
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
                    <PetPlantRegisterBotten >등록하기</PetPlantRegisterBotten>
                </PetPlantRegister>
            </>
        );
    return (
        <div>
            <PetPlantHeader>
                <PetPlantHeaderTitle>나의 반려식물</PetPlantHeaderTitle>
                <PetPlantCardContainer>
                    <PetPlantHeaderImg
                        style={{ backgroundImage: `${petPlant.image}` }}
                    ></PetPlantHeaderImg>
                    <PetPlantHeaderDetail>
                        <img src="./calendar_clock.svg" />
                        {` +  ${diffDays}`} <br />
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
