import React from 'react';
import { SocialButton } from './SocialButton.styles';

const SocialKakao:React.FC = () => {
    const REST_API_KEY = `${import.meta.env.VITE_KAKAO_REST_API_KEY}`;
    const REDIRECT_URI =`https://puru-puru.vercel.app/${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <SocialButton type="button" onClick={loginHandler} style={{ backgroundImage: `url('/btn_kakao.svg')` }}/>
    );
};

export default SocialKakao;
