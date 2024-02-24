import { BottomText, SplashBackground } from './Splash.styles';

const Splash = () => {
    return (
        <>
            <SplashBackground>
                <img src="./Logo.svg" alt="" />
                <BottomText>VERSION : 10.1.1</BottomText>
            </SplashBackground>
            
        </>
    );
};

export default Splash;
