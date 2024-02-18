import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mockData from './mission.json';
import { CSSProperties } from 'styled-components';
const TodayMission: React.FC = () => {
    const mission = mockData;
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
        border: '1px solid rgba(218, 234, 202, 1)',
        background: 'rgba(218, 234, 202, 1)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px',
    };
    const missionCardContent: CSSProperties = {
        width: '220px',
        height: '54px',
        fontFamily: 'sans-serif',
        fontWeight: 700,
        lineHeight: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (
        <Slider {...settings}>
            {mission.map((item) => {
                return (
                    <div key={item.id}>
                        <div style={missionCardLayout}>
                            <div style={missionCardContent}>{item.content}</div>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
};

export default TodayMission;
