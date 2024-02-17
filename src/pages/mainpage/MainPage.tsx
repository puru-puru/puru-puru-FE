import React from 'react';
import * as St from './MainPage.styles';
import TodayMission from './todaymission/TodayMission';
import PlantRecommend from './plantrecommend/PlantRecommend';

const MainPage: React.FC = () => {
    return (
        <St.MainWrapper>
            {/* 오늘의 미션 */}
            <div style={{ marginTop: '-20px' }}>
                <h4>0000의 오늘의 추천 미션</h4>
                <div style={{ marginBottom: '40px' }}>
                    <TodayMission />
                </div>
            </div>

            {/* 추천 식물 */}
            <div style={{ marginTop: '-25px' }}>
                <h4>이 달의 추천 식물</h4>
                <div style={{ maxWidth: '360px' }}>
                    <PlantRecommend />
                </div>
            </div>
        </St.MainWrapper>
    );
};

export default MainPage;
