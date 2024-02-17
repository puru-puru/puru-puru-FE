import React from 'react';
import * as St from './BoardTest.styles';
import arrow from '../../../assets/arrow.svg';
import data from './Test.json';

const BoardTest: React.FC = () => {
    const testData = data;
    return (
        <St.BoardTestWrapper>
            <div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <St.BoardTestSkipButton>
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
                        <div style={{ marginTop: '20px' }}>
                            <St.BoardTestMainItem style={{ backgroundColor }}>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30px',
                }}
            >
                <St.BoardTestMainSelectButton>결과 확인하기</St.BoardTestMainSelectButton>
            </div>
        </St.BoardTestWrapper>
    );
};

export default BoardTest;
