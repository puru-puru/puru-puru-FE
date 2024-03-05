import { useEffect } from 'react';
import { BottomText, SplashBackground } from './Splash.styles';
const preloadImageUrls = [
    '/BackGroundText.webp',
    '/test_img.svg',
    '/potted_img.svg',
    '/diversity_img.svg',
    '/grid_img.svg',
    '/Spin.gif',
    '/src/assets/mainlogo.svg',
    '/src/assets/home.svg',
];
const preloadImages = () => {
    preloadImageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};
const Splash = () => {
    useEffect(() => {
        preloadImages();
    }, []);

    return (
        <>
            <SplashBackground>
                <img src="./Logo.svg" alt="" />
                <BottomText>VERSION : V1.0.0 최신버전</BottomText>
            </SplashBackground>
        </>
    );
};

export default Splash;
