import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './plant.json';
import { CSSProperties } from 'styled-components';
import { BsStar } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';

const PlantRecommend: React.FC = () => {
    // 오늘의 추천 식물 mock data
    const plant = data;
    // 캐러셀 라이브러리 세팅
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
    };
    const plantCardLayout: CSSProperties = {
        maxWidth: '200px',
        minHeight: '260px',
        border: '1px solid white',
        borderRadius: '20px',
        boxShadow: '8px 8px 5px rgba(185, 185, 185, 0.25)',
        fontSize: '10px',
        marginBottom: '7px',
        marginLeft: '120px',
        fontFamily: "'Noto Sans KR', 'sans-serif'",
    };

    return (
        <Slider {...settings}>
            {plant.map((item) => {
                return (
                    <div key={item.id}>
                        <button style={plantCardLayout}>
                            <img
                                style={{ width: '170px', height: '112px', borderRadius: '15px' }}
                                src={item.plantImg}
                            />
                            <div
                                style={{
                                    width: '128px',
                                    height: '21px',
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    fontWeight: '700',
                                    marginTop: '10px',
                                }}
                            >
                                {item.plantTitle}
                            </div>
                            <div>{item.plantContent}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <button
                                    style={{
                                        background: 'white',
                                        fontSize: '10px',
                                        position: 'relative',
                                    }}
                                >
                                    <BsStar />
                                </button>
                                <button
                                    style={{
                                        background: 'white',
                                        fontSize: '10px',
                                        position: 'relative',
                                    }}
                                >
                                    <IoHeartOutline />
                                </button>
                            </div>
                        </button>
                    </div>
                );
            })}
        </Slider>
    );
};

export default PlantRecommend;
