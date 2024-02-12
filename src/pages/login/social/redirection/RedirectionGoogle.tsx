import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectionGoogle: React.FC = () => {
    const code = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();

    useEffect(() => {
        console.log('https:///localhost:3000/api/auth/google/sign-in');
        axios
            .post(`http://localhost:3000/api/auth/google/sign-in`, {code})
            .then((r) => {
                console.log(r.data);

                // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
                Cookies.set('token', r.data.token); // 일단 이름만 저장했다.

                navigate('/');
            })
            .catch((error: any) => {
                // 요청이 실패한 경우 실행될 코드
                console.error('Error:', error);
            });
    }, []);

    return <div>로그인 중입니다.</div>;
};

export default RedirectionGoogle;
