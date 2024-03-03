import styled from 'styled-components';

export const BoardResultWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    position: absolute;
    overflow-x: hidden;
`;
export const BoardResultHeadWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-height: 112px;
    padding: 8px;
`;

export const BoardResultHeadContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-height: 88px;
`;

export const BoardResultHeadContent1 = styled.div`
    width: 100%;
    height: 100%;
    max-height: 40px;
`;

export const BoardResultHeadContent2Layout = styled.div`
    width: 100%;
    height: 100%;
    max-height: 42px;
    padding: 10px 10px 0px 0px;
`;

export const BoardResultHeadContent2 = styled.div`
    width: 100%;
    height: 100%;
    max-height: 32px;
    font-family: 'Pretendard';
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
`;

export const BoardResultMainLayout = styled.div`
    width: 100%;
    height: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -20px 0px;
    margin-bottom: 50px;
`;

export const BoardResultMainSliderLayout = styled.div`
    width: 100%;
    height: 100%;
`;

export const BoardResultSaveButton = styled.button`
    width: 334px;
    height: 57px;
    padding: 0px;
    border: 1px solid rgba(114, 164, 116, 1);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(114, 164, 116, 1);
    font-size: 18px;
    line-height: 27.41px;
    font-weight: 700;
    color: white;
`;
