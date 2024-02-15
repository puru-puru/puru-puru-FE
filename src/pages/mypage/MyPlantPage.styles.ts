import styled from 'styled-components';

// 반려식물 내용 style
export const PetPlantHeader = styled.div`
    letter-spacing: -1.2px;
    padding: 10px;
`;
export const PetPlantHeaderTitle = styled.h2`
    margin-left: 10px;
`;
export const PetPlantCardContainer = styled.div`
    display: flex;
    margin-top: 50px;
`;
export const PetPlantHeaderImg = styled.div`
    width: 200px;
    height: 200px;
    background-color: #DAEACA;
    margin: auto;
    z-index: 1;

    background-position: center;
    border-radius: 100px;
    background-repeat: no-repeat;
    background-size: cover;
`;
export const PetPlantHeaderDetail = styled.div`
    width: 115px;
    height: 100px;

    margin: auto;
    font-size: 12px;
    font-weight: 600;
    color: #72a474;
`;

// 일지 style
export const JournalContainer = styled.div`
    letter-spacing: -1.2px;
    position: absolute;
    bottom: 48px;
    width: 100%;
    height: 330px;
    border-top-left-radius: 16px;
    border-top-left-radius: 16px;
    background-color: #fafff4;
`;

export const PetPlantDetailTitle = styled.p`
    font-size: 28px;
    margin: 30px 15px 0px;
    font-weight: bold;
`;

export const PetPlantDetailLine = styled.div`
    border-top: 3px solid #ff655b;
    opacity: 30%;
    margin: 3px 15px 2em;
    width: 153px;
`;
export const PetPlantDetailTextContainer = styled.div`
    width: 320px;
    display: flex;
    margin: 3px;
`;
export const PetPlantDetailText = styled.p`
    margin: 0 10px;
    font-weight: 600;
    font-size: 12px;
    width: 215px;
`;
export const PetPlantIcon = styled.img`
    width: 40px;
    height: 40px;
    background: #fffaeb;
    border-radius: 10px;
`;
export const VerticalDivider = styled.table`
    border-left: 2px dashed #ffa451;
    height: 24px;
    margin: 0 22px;
`;

export const PlusButton = styled.button<{$isChecked:boolean}>`
    position: absolute;
    left: 78.06%;
    right: 8.61%;
    top: 78%;
    width: 48px;
    height: 48px;
    z-index: 3;
    background: #72a474;
    border-radius: 95px;

    background-image: url(${props => (props.$isChecked ? './Close_Icon.svg' : './Plus_Icon.svg')});
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;
`;

export const PhotoButton = styled.button`
    position: absolute;
    left: 78.33%;
    right: 8.33%;
    top: 45.75%;
    bottom: 23.25%;
    z-index: 3;
    width: 48px;
    height: 48px;

    background: #FFFFFF;
    border-radius: 95px;

    background-image: url('./Photo_Library.svg');
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;
`;

export const PlantButton = styled.button`
    position: absolute;
    left: 78.33%;
    right: 8.33%;
    top: 61.75%;
    bottom: 23.25%;
    z-index: 3;
    width: 48px;
    height: 48px;

    background: #FFFFFF;
    border-radius: 95px;

    background-image: url('./Group_Plant.svg');
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;
`;

// 반려식물 등록
export const PetPlantRegister = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const PetPlantRegisterText = styled.p`
    font-size: 14px;
    letter-spacing: -0.71px;
    margin-left: 10px;
`
export const PetPlantRegisterBotten = styled.button`
    position: absolute;
    bottom: 10%;
    width: 334px;
    height: 57px;
    border-radius: 20px;
    background-color:  #72A474;
    color: #fff;
`;