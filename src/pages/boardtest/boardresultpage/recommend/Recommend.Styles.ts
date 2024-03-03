import styled from 'styled-components';

export const BoardResultMainLayout = styled.div`
    width: 100%;
    height: 100%;
    max-width: 505px;
    max-height: 800px;
    border: none;
    display: flex;
    flex-direction: column;
`;

export const BoardResultMainKeyWord = styled.div`
    font-size: 10px;
    font-weight: 400;
    line-height: 9.55px;
    color: rgba(125, 125, 125, 1);
    margin: 20px 0px 15px 0px;
`;

export const BoardResultMainKeyWordTag = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 900;
    line-height: 21.32px;
    width: 94.74px;
    height: 30px;
    padding: 0px;
    color: rgba(114, 164, 116, 1);
    border: 1px solid rgba(114, 164, 116, 1);
    border-radius: 30px;
    background-color: rgba(252, 255, 249, 1);
    /* background-image: linear-gradient(#fff, #fff),
        linear-gradient(to right, rgba(249, 136, 31, 1) 0%, rgba(255, 119, 76, 1) 100%);
    background-origin: padding-box;
    background-clip: content-box, border-box;
    &:focus,
    :focus-visible {
        outline: none;
    }
    &:hover {
        border: 1px solid transparent;
        border-radius: 30px;
        background-image: linear-gradient(#fff, #fff),
            linear-gradient(to right, rgba(249, 136, 31, 1) 0%, rgba(255, 119, 76, 1) 100%);
        background-origin: padding-box;
        background-clip: content-box, border-box;
    } */
`;

export const BoardResultMainKeyWordTagImg = styled.img`
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 100%;
    margin: 0px 10px;
`;

export const BoardResultMainTagQuote = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: rgba(149, 149, 149, 1);
    margin: 15px 0px;
`;

export const RecommendLayout = styled.div`
    width: 100%;
    height: 100%;
    max-width: 238px;
    min-height: 320px;
    border: 1px solid white;
    border-radius: 30px;
    box-shadow: 0px 12px 5px rgba(185, 185, 185, 0.25);
    margin: 0px 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

export const RecommendPlantImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 238px;
    max-height: 160px;
    border: none;
    border-radius: 20px 20px 0px 0px;
    background: none;
`;

export const RecommendPlantHeadLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const RecommendPlantTitle = styled.div`
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: 700;
    font-family: 'Pretendard-Regular';
    color: rgba(114, 164, 116, 1);
    display: flex;
    margin: 10px 0px 10px 10px;
`;

export const RecommendPlantTypeLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Pretendard-Regular';
    color: rgba(114, 164, 116, 1);
    margin: 20px 10px;
`;

export const RecommendPlantTypeImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 20px;
    max-height: 25px;
    border: none;
    border-radius: 100%;
`;

export const RecommendContentLayout = styled.div`
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Pretendard-Regular';
    margin: 0px 5px;
    display: flex;
`;
