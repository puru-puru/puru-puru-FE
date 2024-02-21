import styled from 'styled-components';

export const PlantCardLayout = styled.div`
    width: 100%;
    height: 260px;
    max-width: 200px;
    border: 1px solid white;
    border-radius: 20px;
    box-shadow: 8px 8px 5px rgba(185, 185, 185, 0.25);
    font-size: 10px;
    margin: 0px 120px;
    margin-bottom: 15px;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const PlantCardImg = styled.img`
    width: 170px;
    height: 112px;
    border-radius: 15px;
    margin: 5px 15px;
`;

export const PlantCardName = styled.div`
    width: 128px;
    height: 21px;
    display: flex;
    justify-content: flex-start;
    font-weight: 700;
    margin: 5px 15px;
`;

export const PlantCardContent = styled.div`
    width: 170px;
    margin: 5px 15px;
`;

export const PlantCardButtonLayout = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PlantCardButtonStyle = styled.button`
    background: none;
    font-size: 10px;
`;
