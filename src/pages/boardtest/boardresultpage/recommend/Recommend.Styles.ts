import styled from 'styled-components';

export const BoardResultMainCatalog = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 900;
    line-height: 18.28px;
    width: 94.74px;
    height: 30px;
    padding: 0px;
    border: 1px solid transparent;
    border-radius: 30px;
    background-image: linear-gradient(#fff, #fff),
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
    }
`;

export const RecommendLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
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
    background-color: rgba(255, 248, 220, 1);
    border-radius: 20px;
    box-shadow: 0px 20px 40px rgba(2, 32, 44, 0.05);
`;

export const RecommendImageButtonLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RecommendSaveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid white;
    border-radius: 100%;
    background-color: white;
    padding: 0px;
    position: absolute;
`;

export const RecommendTitleLayout = styled.div`
    width: 225px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 24px;
    font-weight: 800;
    line-height: 31.25px;
`;

export const RecommendPlantTypeLayout = styled.div`
    width: 157px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 10px 10px;
    margin-right: 20px;
    font-size: 15px;
    font-weight: 700;
    line-height: 27px;
    font-family: 'Noto Sans KR', sans-serif;
`;

export const RecommendContentLayout = styled.div`
    width: 319px;
    height: 63px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
    font-family: 'Noto Sans KR', sans-serif;
`;
