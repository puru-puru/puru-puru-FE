import styled from 'styled-components';

export const BoardResultWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    /* margin-top: 15px; */
    margin-right: 30px;
    margin-bottom: 30px;
    position: absolute;
    overflow-x: hidden;
`;

export const BoardResultHeadContent = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: rgba(149, 149, 149, 1);
    margin-top: -10px;
`;

export const BoardResultMainLayout = styled.div`
    width: 100%;
    height: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BoardResultMainSliderLayout = styled.div`
    width: 100%;
    height: 100%;
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
    /* margin-top: -30px; */
`;
