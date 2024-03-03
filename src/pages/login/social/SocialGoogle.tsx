import React from 'react';
import { SocialButton } from './SocialButton.styles';

const SocialKakao: React.FC = () => {
    const GMAIL_OAUTH_CLIENT_ID = `${import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}`;
    const GMAIL_OAUTH_REDIRECT_URI = `${import.meta.env.VITE_GOOGLE_REDIRECT_URI}`;

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
