import React from 'react';
import { SocialButton } from './SocialButton.styles';

const SocialKakao:React.FC = () => {
    const REST_API_KEY = '4d53af679065e77f93be56fcdf730e1e';
    const REDIRECT_URI = 'http://localhost:3000/api/auth/kakao/callback';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <SocialButton type="button" onClick={loginHandler} style={{ backgroundImage: `url('/btn_kakao.svg')` }}/>
    );
};

export default SocialKakao;
