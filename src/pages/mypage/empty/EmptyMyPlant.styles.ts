import styled from 'styled-components';

// 반려식물 등록
export const PetPlantRegister = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const PetPlantRegisterText = styled.p`
    font-size: 14px;
    letter-spacing: -0.71px;
    margin-left: 10px;
`;
export const PetPlantRegisterButton = styled.button`
    position: absolute;
    bottom: 10%;
    width: 334px;
    height: 57px;
    border-radius: 20px;
    background-color: #72a474;
    color: #fff;
`;

export const PetPlantRegisterImg = styled.img`
    width: 150px;
    height: 150px;
    margin-top: 120px;
    pointer-events: none; 
    user-select: none;
`;

