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

                <h2>반려 식물 찾기</h2>
            </div>
            <St.BoardTestMainTitle>원하는 키워드를 1개 선택 해주세요.</St.BoardTestMainTitle>
            <St.BoardTestMain>
                {testData.map((testItem) => {
                    return (
                        <div style={{ marginTop: '20px' }}>
                            <St.BoardTestMainItem>
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
