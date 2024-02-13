import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './mission.json';
import { CSSProperties } from 'styled-components';

const TodayMission: React.FC = () => {
    // 오늘의 미션 mock data
    const mission = data;
    // 캐러셀 라이브러리 세팅
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const missionCardLayout: CSSProperties = {
        maxWidth: '330px',
        height: '120px',
        border: '1px solid white',
        background: 'rgba(218, 234, 202, 1)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px',
    };
    return (
        <Slider {...settings}>
            {mission.map((item) => {
                return (
                    <div key={item.id}>
                        <div style={missionCardLayout}>{item.content}</div>
                    </div>
                );
            })}
        </Slider>
    );
};

export default TodayMission;
