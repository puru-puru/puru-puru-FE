import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axios } from '../../../../api/http';

const RedirectionGoogle: React.FC = () => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .post('/api/auth/login/google', { code })
            .then((response) => {
                Cookies.set('AccessToken', response.data.accessToken, {
                    expires: 1 / 24,
                    sameSite: 'strict',
                    overwrite: true,
                });
                Cookies.set('RefreshToken', response.data.refreshToken, {
                    expires: 30,
                    sameSite: 'strict',
                    overwrite: true,
                });
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
    }, []);

    return <div>로그인 중입니다.</div>;
};

export default RedirectionGoogle;
