import styled from 'styled-components';

export const BoardResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    /* margin-top: 15px; */
    margin-right: 30px;
    margin-bottom: 30px;
`;

export const BoardResultHeadContent = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: rgba(149, 149, 149, 1);
    margin-top: -10px;
`;

export const BoardResultMainLayout = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BoardResultMainCatalogButton = styled.button`
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

export const BoardResultMainSliderLayout = styled.div`
    width: 320px;
    height: 450px;
`;

export const BoardResultSaveButton = styled.button`
    width: 334px;
    height: 57px;
    padding: 0px;
    border: 1px solid rgba(218, 234, 202, 1);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(218, 234, 202, 1);
    font-size: 18px;
    line-height: 27.41px;
    font-weight: 700;
    color: white;
    margin-top: 15px;
`;
