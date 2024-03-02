import React from 'react';
import { SocialButton } from './SocialButton.styles';

const SocialKakao: React.FC = () => {
    const GMAIL_OAUTH_CLIENT_ID = `214149105868-8h686c0pdnk0cvscof9qr24604t5rdh8.apps.googleusercontent.com`;
    const GMAIL_OAUTH_REDIRECT_URI = 'https://puru-puru.vercel.app/api/auth/login/google/return';

    const link = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GMAIL_OAUTH_CLIENT_ID}&redirect_uri=${GMAIL_OAUTH_REDIRECT_URI}&response_type=code&scope=email+profile`;


    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <SocialButton
            type="button"
            onClick={loginHandler}
            style={{ backgroundImage: `url('/btn_google.svg')` }}
        />
    );
};

export default SocialKakao;
