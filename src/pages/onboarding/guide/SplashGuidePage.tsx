import React, { useEffect } from 'react';
import Splash from '../../../components/splash/Splash';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const SplashGuidePage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            // setIsSplash(false);
            navigate('/signin');
        }, 1500);

        return () => clearTimeout(timeout);
    }, [navigate]);

        return <Splash />;
};

export default SplashGuidePage;
