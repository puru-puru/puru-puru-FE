import styled from 'styled-components';

export const RecommendLayout = styled.div`
    width: 320px;
    height: 410px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const RecommendImageLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 258px;
    height: 224px;
    border: 1px solid rgba(255, 248, 220, 1);
    border-radius: 20px;
    box-shadow: 0px 20px 40px rgba(2, 32, 44, 0.05);
    margin-left: 30px;
`;

export const RecommendImageButtonLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RecommendImageButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid white;
    border-radius: 100%;
    background-color: white;
    padding: 0px;
`;

export const RecommendTitleLayout = styled.div`
    width: 225px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 24px;
    font-weight: 800;
    line-height: 31.25px;
`;

export const RecommendContentLayout = styled.div`
    width: 319px;
    height: 63px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
    font-family: 'Noto Sans KR', sans-serif;
`;
