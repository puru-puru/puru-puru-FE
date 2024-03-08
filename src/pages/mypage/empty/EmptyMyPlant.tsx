import React from 'react';
import { PetPlantHeader,  PetPlantHeaderTitle } from '../MyPlantPage.styles';
import { PetPlantRegister, PetPlantRegisterButton, PetPlantRegisterImg, PetPlantRegisterText } from './EmptyMyPlant.styles';
import { useNavigate } from 'react-router-dom';

const EmptyMyPlant: React.FC = () => {
    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate('/plants'); // 등록하기 버튼 클릭 시 /plants로 이동
    };
    return (
        <>
            <PetPlantHeader>
                <PetPlantHeaderTitle>나의 반려식물</PetPlantHeaderTitle>
                <PetPlantRegisterText>
                    등록된 식물이 없어요! 식물을 먼저 등록해주세요
                </PetPlantRegisterText>
            </PetPlantHeader>
            <PetPlantRegister>
                <PetPlantRegisterImg src='/TitleIcon.svg' alt="Register Icon"
                />
                <PetPlantRegisterButton onClick={handleRegisterClick}>
                    등록하기
                </PetPlantRegisterButton>
            </PetPlantRegister>
        </>
    );
};

export default EmptyMyPlant;
