import React from 'react';
import { SocialButton } from './SocialButton.styles';

const SocialKakao:React.FC = () => {
    const REST_API_KEY = '19449fa93915b6797984debf2dada7a3';
    const REDIRECT_URI = 'http://localhost:5173/api/auth/login/kakao/return';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <SocialButton type="button" onClick={loginHandler} style={{ backgroundImage: `url('/btn_kakao.svg')` }}/>
    );
};

export default SocialKakao;
