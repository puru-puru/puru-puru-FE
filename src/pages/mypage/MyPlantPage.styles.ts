import styled from 'styled-components';
import Slider from 'react-slick';
import { colors } from '../../styles/colors';
// 반려식물 내용 style
export const PetPlantHeader = styled.div`
    letter-spacing: -1.2px;
`;
export const PetPlantHeaderTitle = styled.h2`
    margin-left: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
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
    background-color: ${colors.green50};
    margin: auto;
    z-index: 1;
    border-radius: 100px;
    overflow: hidden;
    position: relative;
`;
export const PetPlantHeaderContainer = styled.div`
    width: 116px;
    height: 150px;
    margin: auto;
    font-size: 12px;
    font-weight: 600;
    color: ${colors.green100};
`;

export const PetPlantHeaderSubTitle = styled.div`
    width: 39px;
    height: 12px;
    font-size: 8px;
    border-radius: 20px;
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.pink100};
`;

// 일지 style
export const JournalContainer = styled.div`
    letter-spacing: -1.2px;
    width: 100%;
    height: 280px;
    border-top-left-radius: 16px;
    border-top-left-radius: 16px;
    padding: 15px;
    background-color: #fafff4;
    position: relative;
`;
export const JournalHeader = styled.div``;

export const JournalBody = styled.div`
    margin-top: 20px;
`;
export const PetPlantDetailTitle = styled.p`
    font-size: 28px;
    margin: 30px 15px 0px;
    font-weight: bold;
`;

export const PetPlantDetailLine = styled.div`
    border-top: 3px solid #ff655b;
    opacity: 30%;
    margin: 0px 15px;
    width: 153px;
`;
export const PetPlantDetailTextContainer = styled.div`
    width: 320px;
    display: flex;
    margin: 3px;
    &:hover {
        cursor: pointer;
    }
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
export const ButtonContainer = styled.div`
    width: 70px;
    display: flex;
    gap: 5px;
`;

export const DeleteButton = styled.button`
    width: 24px;
    height: 24px;
    background: #fafff4;
    padding: 0;
    border-radius: 50%;

    background-image: url('./Delete_Icon.svg');
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PlantButton = styled.button`
    width: 24px;
    height: 24px;
    padding: 0;
    background: #fafff4;
    border-radius: 50%;

    background-image: url('./Plus_Icon.svg');
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PlantUpdateContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PlantSlickCustom = styled(Slider)`
    width: 100%;
    overflow: hidden;
`;

export const DotsCustom = styled.ul`
    li button::before {
        content: '' !important;
        background: green !important;
        color: transparent !important;

        height: 12px !important;
        width: 12px !important;
        border-radius: 100%;
    }
`;

export const MyPlantToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    width: 310px;
    height: auto;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
`;
export const MyPlantToggleContainer = styled.div`
    margin: 10px;
`;
export const MyPlantToggleDetail = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;
`;
export const MyPlantToggleButton = styled.button<{$isChecked: boolean}>`
    width: 90px;
    background-color: ${(props)=>(props.$isChecked ? colors.green100 : colors.green50)};
    color: ${colors.white};
`