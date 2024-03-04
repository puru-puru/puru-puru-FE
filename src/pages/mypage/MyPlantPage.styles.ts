import styled from 'styled-components';
import Slider from 'react-slick';
import './recommendslick/slick.css';
import './recommendslick/slick-theme.css';
import { colors } from '../../styles/colors';

export const PetPlantContainer = styled.div`
    width: 320px;
    height: 700px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 10px;
`;
export const PetPlantBorder = styled.div`
    width: 100%;
    max-width: 320px;
    height: 100%;
    max-height: 520px;
    margin: 0 auto;
    border: 1px solid white;
    box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    position: relative;
`;

// 상단
export const PetPlantHeader = styled.div`
    letter-spacing: -1.2px;
    flex-direction: column;
`;
export const PetPlantHeaderTitle = styled.h2`
    margin-left: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const PetPlantHeaderImg = styled.img`
    width: 100%;
    height: 100%;
`;
export const PetPlantHeaderImgContainer = styled.div`
    width: 318px;
    height: 180px;
    background-color: ${colors.green50};
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    overflow: hidden;
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
    position: absolute;
    top: 20px;
    right: 0;
`;

export const PlantSlickCustom = styled(Slider)`
    /* width: 100%; */
    overflow-x: hidden;
    .slick-prev {
        display: none; 
    }
`;


// 중간
export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px;
`;

export const StyledImageContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.green100};

`;
export const PetPlantDetailContainer = styled.div`
    height: 140px;
    padding: 10px;
    font-size: 12px;
    font-weight: 600;
    color: ${colors.green100};
`;
export const PetPlantDetailTitle = styled.p`
    font-size: 16px;
    margin: 5px 0px;
    font-weight: bold;
    color: ${colors.green100};
`;
export const PlantName = styled.div`
    font-weight: 600;
    font-size: 10px;
    margin: 5px 0px;
    color: #3D3D3D;
`;
export const PlantContent = styled.div`
    font-size: 12px;
    color: #3D3D3D;
`;

// 일지 부분
export const JournalContainer = styled.div`
    height: 190px;
    letter-spacing: -1.2px;
    padding: 15px;
    position: relative;
`;
export const JournalHeaderContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const JournalTitle = styled.p`
    font-size: 12px;
    margin: 0px;
    margin-left: 5px;
    color: ${colors.green100};
    font-weight: 600;
`
export const JournalBody = styled.div`
    padding: 15px;
`;

export const PetPlantDetailTextContainer = styled.div`
    width: 320px;
    display: flex;

    &:hover {
        cursor: pointer;
    }
`;

export const PetPlantDetailText = styled.div`
    margin: 0 15px;
    font-weight: 600;
    font-size: 10px;
    width: 215px;
`;
export const AnswerTextWrapper = styled.div`
    opacity: 0.3;
    margin: 5px 5px 10px;
`;
export const PetPlantIcon = styled.img`
    width: 18px;
    height: 18px;
    background: #fffaeb;
    border-radius: 10px;
`;
export const VerticalDivider = styled.table`
    border-left: 2px dashed ${colors.green50};
    height: 100px;
    margin: 0 8px;
    z-index: -1;
    position: absolute;
`;

//-------------------------------------------------
export const PetPlantDetailLine = styled.div`
    border-top: 3px solid #ff655b;
    opacity: 30%;
    margin: 0px 15px;
    width: 153px;
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
