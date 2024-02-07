import React from 'react';
import { SocialButton } from './SocialButton.styles';

const SocialKakao:React.FC = () => {
    const REST_API_KEY = '구글키';
    const REDIRECT_URI = '구글URI';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <SocialButton type="button" onClick={loginHandler} style={{ backgroundImage: `url('/btn_google.svg')` }}/>
    );
};

export default SocialKakao;
