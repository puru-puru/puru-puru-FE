import styled from 'styled-components';

export const MissionCardLayout = styled.div`
    max-width: 330px;
    height: 120px;
    border: 1px solid rgba(102, 173, 102, 1);
    background-color: rgba(102, 173, 102, 1);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 60px; */
    position: relative;
    /* overflow: visible; */
`;

export const MissionCardContent = styled.div`
    width: 220px;
    height: 54px;
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MissionCardBanner = styled.img`
    top: 0px;
    background: none;
    overflow: visible;
    position: fixed;
    z-index: 2;
`;

export const MissionCardLogoLayout = styled.div`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5%;
    right: 3%;
    border: 1px solid white;
    border-radius: 100%;
    background-color: white;
`;

export const MissionCardLogo = styled.img`
    width: 28px;
    height: 28px;
`;
