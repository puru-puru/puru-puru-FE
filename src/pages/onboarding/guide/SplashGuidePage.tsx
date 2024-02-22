import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { isSplashState } from '../../../recoil/atom';
import Splash from '../../../components/splash/Splash';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import { SlideContainer, SliderButton, StyledSlider } from './SplashGuidePage.styles';

const SplashGuidePage: React.FC = () => {
    const [isSplash, setIsSplash] = useRecoilState(isSplashState);
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current: number) => setCurrentSlide(current),
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSplash(false);
        }, 1500);

        return () => clearTimeout(timeout);
    }, [setIsSplash]);

    const handleLoginButtonClick = () => {
        navigate('/signin');
    };

    const handleNextButtonClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext(); 
        }
    };

    if (isSplash) {
        return <Splash />;
    } else
        return (
            <SlideContainer>
                <StyledSlider {...settings} ref={sliderRef}>
                    <div>지친 일상 반려식물과 함께해요</div>
                    <div>반려 식물 테스트와 함께 반려 식물을 구경해요</div>
                    <div>자신의 반려식물을 자랑해주세요</div>
                </StyledSlider>
                {currentSlide === 2 ? (
                    <SliderButton onClick={handleLoginButtonClick}>로그인</SliderButton>
                ) : (
                    <SliderButton onClick={handleNextButtonClick}>다음</SliderButton>
                    
                )}
            </SlideContainer>
        );
};

export default SplashGuidePage;
