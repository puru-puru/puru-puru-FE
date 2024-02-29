import * as St from './BoardTest.styles';
import arrow from '../../../assets/arrow.svg';
import boardTestData from './Test.json';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BoardTestTagItem from './BoardTestTagItem';
// import { useGetBoardTestPageData } from '../../../api/boardtest/BoardTest';

const BoardTest = () => {
    const [boardId, setBoardId] = useState<number>(0);
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const navigate = useNavigate();
    // const pageData = useGetBoardTestPageData();
    // console.log(pageData);
    const testData = boardTestData;
    // 키워드 선택 state

    // skip 버튼 클릭시 MainPage 이동
    const skipButtonHandler = () => {
        navigate('/mainpage');
    };
    // 키워드 클릭 handler
    const boardItemHandler = (id: number) => {
        console.log('id => ', id);
        setBoardId(id);

        // setBoardId((prevId: number) => {
        //     if (prevId === id) {
        //         setIsSelected((prevState) => !prevState);
        //     }
        // });
    };
    // console.log('boardId => ', boardId);
    // 결과 확인하기 버튼 클릭 후 보드 결과 페이지 이동
    const selectedButtonHandler = (boardId: number) => {
        navigate('/boardresult', { state: { boardId } });
    };
    // useEffect(() => {
    //     console.log('isSelected => ', isSelected);
    // });
    return (
        <St.BoardTestWrapper>
            <div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <St.BoardTestSkipButton onClick={skipButtonHandler}>
                        Skip
                        <img style={{ marginLeft: '5px' }} src={arrow} />
                    </St.BoardTestSkipButton>
                </div>

                <h2 style={{ marginTop: '-2px' }}>반려 식물 찾기</h2>
            </div>
            <St.BoardTestMainTitle>원하는 키워드를 1개 선택 해주세요.</St.BoardTestMainTitle>
            <St.BoardTestMain>
                {testData.map((testItem) => {
                    return (
                        <BoardTestTagItem
                            key={testItem.id}
                            id={testItem.id}
                            keyword={testItem.keyword}
                            keywordImgURL={testItem.keywordImgURL}
                            boardItemHandler={boardItemHandler}
                        />
                    );
                })}
            </St.BoardTestMain>
            <St.BoardTestMainSelectButtonStyle>
                <St.BoardTestMainSelectButton
                    onClick={() => selectedButtonHandler(boardId)}
                    $isSelected={isSelected}
                >
                    결과 확인하기
                </St.BoardTestMainSelectButton>
            </St.BoardTestMainSelectButtonStyle>
        </St.BoardTestWrapper>
    );
};

export default BoardTest;
