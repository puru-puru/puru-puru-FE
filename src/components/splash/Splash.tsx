import { BottomText, SplashBackground } from './Splash.styles';

const Splash = () => {
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
