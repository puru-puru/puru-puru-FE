import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { User } from '../../../api/Login/User';
import {
    Heading,
    SignInBotten,
    SignUpBotten,
    SocialBotten,
    SocialContainer,
    SocialDescription,
} from './SignIn.styles'; // 에러 메시지를 표시할 컴포넌트 추가
import { ErrorMessage, LoginContainner, LoginInput } from '../Login.styles';
import { useNavigate } from 'react-router-dom';
import SocialKakao from '../social/SocialKakao';
import SocialGoogle from '../social/SocialGoogle';
import { http } from '../../../api/http';

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [user, setUser] = useState<User>({
        email: '',
        password: '',
    });
    const [error, setError] = useState<string>(''); // 에러 상태 추가


    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    // 이메일과 비밀번호가 5자 이상 입력되었을 때 isChecked를 true로 설정
    useEffect(() => {
        const isEmailValid = user.email.length > 0 && validateEmail(user.email);
        const isPasswordValid = user.password.length >= 5;
    
        if (isEmailValid && isPasswordValid) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [user.email, user.password]);

    const handleLogin = async () => {
        try {
            // 아이디 또는 비밀번호가 빈 경우 에러 메시지 표시
            if (user.email === '' || user.password === '') {
                setError('아이디와 비밀번호를 입력해주세요');
                return;
            }
            const response = await http.post('api/auth/sign-in', user);
            console.log(response);
            Cookies.set('Authorization', response.data.token);
            if (response.status === 200) {
                setError(response.data.message);
                setUser({
                    email: '',
                    password: '',
                });
                // navigate('/');
            }
        } catch (error: any) {
            // 서버 응답 오류 처리
            if (error.response) {
                const statusCode = error.response.status;
                const errorMessage = error.response.data.message;
                if (statusCode === 404) {
                    setError(errorMessage);
                }
            }
            // 그 외의 오류는 일반적인 알림으로 표시
            setError(error.toString());
        }
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <LoginContainner>
            <div>
                <Heading>Login</Heading>
                <div>
                    <p>Email</p>
                    <LoginInput
                        type="text"
                        value={user.email}
                        placeholder="예)puleuspuleus@puleus.co.kr"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                    <p>Password</p>
                    <LoginInput
                        type="password"
                        value={user.password}
                        placeholder="비밀번호를 5자 이상 입력하세요"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                    {/* 에러 메시지를 표시하는 컴포넌트 추가 */}
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </div>

                <br />
                <SignInBotten $isChecked={isChecked} onClick={handleLogin}>
                    로그인하기
                </SignInBotten>
                <SignUpBotten onClick={handleSignUp} type="button">
                    회원가입하기
                </SignUpBotten>
                <SocialContainer>
                    <SocialDescription>SNS 계정으로 간편하게 가입하세요</SocialDescription>
                    <SocialBotten>
                        <SocialGoogle />
                        <SocialKakao />
                    </SocialBotten>
                </SocialContainer>
            </div>
        </LoginContainner>
    );
};

export default SignIn;
