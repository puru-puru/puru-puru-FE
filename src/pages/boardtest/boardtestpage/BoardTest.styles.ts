import styled, { css } from 'styled-components';

export const BoardTestWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const BoardTestSkipButton = styled.button`
    display: flex;
    align-items: center;
    background-color: white;
    font-weight: 500;
`;

export const BoardTestMain = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
`;

export const BoardTestMainTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: rgba(149, 149, 149, 1);
`;

export const BoardTestMainItem = styled.button<{ $isSelected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 140px;
    height: 140px;
    border-radius: 20px;
    border: 2px solid white;
    box-shadow: 0px 8px 5px rgba(152, 152, 152, 0.25);
    &:hover {
        border-color: rgba(218, 234, 202, 1);
    }
    &:focus {
        ${({ $isSelected }) =>
            $isSelected &&
            css`
                border-color: rgba(114, 164, 116, 1);
            `}
    }
`;

export const BoardTestMainItemContent = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 27.41px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const BoardTestMainSelectButtonStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    margin-top: 15px;
`;

export const BoardTestMainSelectButton = styled.button<{ $isSelected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 334px;
    height: 57px;
    border-radius: 20px;
    background-color: ${(props) =>
        props.$isSelected ? 'rgba(114, 164, 116, 1)' : 'rgba(218, 234, 202, 1)'};
    box-shadow: 0px 10px 30px rgba(202, 66, 17, 0.1);
    font-weight: 800;
    font-size: 18px;
    line-height: 27.41px;
    color: rgba(255, 255, 255, 1);
`;
