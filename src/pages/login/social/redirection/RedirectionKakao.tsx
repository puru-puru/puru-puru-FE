import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectionKakao: React.FC = () => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .post(`https://purupuru.store/api/auth/login/kakao`, { code })
            .then((response) => {
                Cookies.set('AccessToken', response.data.accessToken, { expires: 1 / 24 });
                Cookies.set('RefreshToken', response.data.refreshToken, { expires: 30 });
                if (response.data.hasNickname) {
                    navigate('/mainpage');
                } else {
                    navigate('/service');
                }
            })
            .catch((error) => {
                // 요청이 실패한 경우 실행될 코드
                console.error('Error:', error);
            });
    }, [code, navigate]);

    return <div>로그인 중입니다.</div>;
};

export default RedirectionKakao;
