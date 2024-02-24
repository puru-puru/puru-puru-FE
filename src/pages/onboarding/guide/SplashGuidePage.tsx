import React, { useEffect } from 'react';
// import { useRecoilState } from 'recoil';
// import { isSplashState } from '../../../recoil/atom';
import Splash from '../../../components/splash/Splash';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
// import { SlideContainer, SlideItem, SliderButton, StyledSlider } from './SplashGuidePage.styles';

const SplashGuidePage: React.FC = () => {
    // const [isSplash, setIsSplash] = useRecoilState(isSplashState);
    // const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    // const sliderRef = useRef<Slider>(null);

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     afterChange: (current: number) => setCurrentSlide(current),
    // };

    useEffect(() => {
        const timeout = setTimeout(() => {
            // setIsSplash(false);
            navigate('/signin');
        }, 1500);

        return () => clearTimeout(timeout);
    }, [navigate]);

    // const handleLoginButtonClick = () => {
    //     navigate('/signin');
    // };

    // const handleNextButtonClick = () => {
    //     if (sliderRef.current) {
    //         sliderRef.current.slickNext();
    //     }
    // };

    // if (isSplash) {
        return <Splash />;
    // } else
    //     return (
    //         <SlideContainer>
    //             <img src="./SplashIcon.svg" alt="" />
    //             <StyledSlider {...settings} ref={sliderRef}>
    //                 <SlideItem>
    //                     <p>일상의 지친 순간, 힐링을 위한 반려식물과 함께하세요</p>
    //                 </SlideItem>
    //                 <SlideItem>
    //                     <p>테스트를 통해 원하는 반려식물을 찾아보세요</p>
    //                 </SlideItem>
    //                 <SlideItem>
    //                     <p>당신의 특별한 반려식물을 자랑해보세요</p>
    //                 </SlideItem>
    //             </StyledSlider>
    //             {currentSlide === 2 ? (
    //                 <SliderButton onClick={handleLoginButtonClick}>로그인</SliderButton>
    //             ) : (
    //                 <SliderButton onClick={handleNextButtonClick}>다음</SliderButton>
    //             )}
    //         </SlideContainer>
    //     );
};

export default SplashGuidePage;
