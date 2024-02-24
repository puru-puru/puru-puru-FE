import styled from 'styled-components';

// 반려식물 내용 style
export const PetPlantHeader = styled.div`
    letter-spacing: -1.2px;
`;
export const PetPlantHeaderTitle = styled.h2`
    margin-left: 10px;
    margin-top: 0px;
`;
export const PetPlantCardContainer = styled.div`
    display: flex;
`;
export const PetPlantHeaderImg = styled.img`
    width: 100%; 
    height: 100%;
    display: block; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`;
export const PetPlantHeaderImgContainer = styled.div`
    width: 200px; 
    height: 200px; 
    background-color: #DAEACA;
    margin: auto;
    z-index: 1;
    border-radius: 100px;
    overflow: hidden;
    position: relative;
`
export const PetPlantHeaderDetail = styled.div`
    width: 116px;
    height: 150px;
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
    top: 63.45%;
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
    top: 70.75%;
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

