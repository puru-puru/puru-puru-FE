import { BottomText, SplashBackground } from './Splash.styles';

const Splash = () => {
    return (
        <>
            <SplashBackground>
                <img src="./SplashIcon.svg" alt="" />
                <BottomText>VERSION : 10.1.1</BottomText>
            </SplashBackground>
            
        </>
    );
};

export default Splash;
