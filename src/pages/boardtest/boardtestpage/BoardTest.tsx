import * as St from './BoardTest.styles';
import arrow from '../../../assets/arrow.svg';
import boardTestData from './Test.json';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { useGetBoardTestPageData } from '../../../api/boardtest/BoardTest';

const BoardTest = () => {
    const [boardId, setBoardId] = useState(0);
    const navigate = useNavigate();
    // const pageData = useGetBoardTestPageData();
    // console.log(pageData);
    const testData = boardTestData;
    // 키워드 선택 state
    const [isSelected, setIsSelected] = useState(false);
    // skip 버튼 클릭시 MainPage 이동
    const skipButtonHandler = () => {
        navigate('/mainpage');
    };
    // 키워드 클릭 handler
    const boardItemHandler = (id: number) => {
        setIsSelected((prevState) => !prevState);
        setBoardId(id);
    };
    // 결과 확인하기 버튼 클릭 후 보드 결과 페이지 이동
    const selectedButtonHandler = (boardId: number) => {
        navigate('/boardresult', { state: { boardId } });
    };

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
                {testData.map((testItem, index) => {
                    let backgroundColor: string;
                    switch (index) {
                        case 0:
                            backgroundColor = 'rgba(255, 248, 220, 1)';
                            break;
                        case 1:
                            backgroundColor = 'rgba(242, 255, 224, 1)';
                            break;
                        case 2:
                            backgroundColor = 'rgba(255, 229, 222, 1)';
                            break;
                        case 3:
                            backgroundColor = 'rgba(189, 209, 84, 1)';
                            break;
                        case 4:
                            backgroundColor = 'rgba(249, 250, 255, 1)';
                            break;
                        case 5:
                            backgroundColor = 'rgba(254, 247, 248, 1)';
                            break;
                        default:
                            backgroundColor = 'rgba(243, 255, 254, 1))'; // Default color
                    }
                    return (
                        <div key={testItem.id} style={{ marginTop: '20px' }}>
                            <St.BoardTestMainItem
                                onClick={() => boardItemHandler(testItem.id)}
                                $isSelected={isSelected}
                                style={{ backgroundColor }}
                            >
                                <img
                                    style={{ width: '50px', height: '50px' }}
                                    src={testItem.keywordImgURL}
                                />
                                <St.BoardTestMainItemContent>
                                    {testItem.keyword}
                                </St.BoardTestMainItemContent>
                            </St.BoardTestMainItem>
                        </div>
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
