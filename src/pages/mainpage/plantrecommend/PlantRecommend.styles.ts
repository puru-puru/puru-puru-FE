import styled from 'styled-components';

export const PlantCardLayout = styled.div`
    width: 100%;
    height: 260px;
    max-width: 200px;
    border: 1px solid white;
    border-radius: 30px;
    box-shadow: 12px 12px 5px rgba(185, 185, 185, 0.25);
    margin: 0px 120px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
`;

export const PlantCardImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 134px;
    border-radius: 20px 20px 0px 0px;
`;

export const PlantCardName = styled.div`
    width: 100%;
    height: 100%;
    max-height: 19px;
    display: flex;
    /* justify-content: flex-start; */
    font-size: 16px;
    font-weight: 700;
    color: rgba(114, 164, 116, 1);
    margin: 10px 5px;
`;

export const PlantCardContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 172px;
    max-height: 54px;
    font-size: 12px;
    font-weight: 400;
    margin: 0px 8px;
`;
