import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { User } from '../../../api/User';
import {
    Heading,
    SignInBotten,
    SignUpBotten,
    // SocialBotten,
    // SocialContainer,
    // SocialDescription,
} from './SignIn.styles'; // 에러 메시지를 표시할 컴포넌트 추가
import { ErrorMessage, LoginContainer } from '../Login.styles';
import { useNavigate } from 'react-router-dom';
// import SocialKakao from '../social/SocialKakao';
// import SocialGoogle from '../social/SocialGoogle';
import { signinApi } from '../../../api/http';
import { SharedInput } from '../../Shared.styles';

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
    

    useEffect(() => {
        const isEmailValid = user.email.length > 0 && validateEmail(user.email);
        const isPasswordValid = user.password.length >= 5;

        const accessTokenExpiration = Cookies.get('AccessToken');
        const nicknameExists = Cookies.get('Nickname');

        if (accessTokenExpiration && nicknameExists) {
            alert('이미 로그인되어 있습니다.');
            navigate('/mainpage');
            return;
        }
        if (isEmailValid && isPasswordValid) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [user.email, user.password, navigate]);

    const handleLogin = async () => {
        try {
            if (user.email === '' || user.password === '') {
                setError('아이디와 비밀번호를 입력해주세요');
                return;
            }
            const response = await signinApi.post('api/auth/sign-in', user);
            console.log(response);
            Cookies.set('AccessToken', response.data.accessToken);
            Cookies.set('RefreshToken', response.data.refreshToken);
            setUser({
                email: '',
                password: '',
            });
            const nicknameExists = Cookies.get('Nickname');

            if (nicknameExists) {
                navigate('/mainpage');
            } else {
                navigate('/users');
            }

        } catch (error: any) {
            if (error.response) {
                const statusCode = error.response.status;
                if (statusCode === 404) {
                    setError('서버주소를 찾을수가 없습니다.');
                }
            }
            setError('회원가입해주세요');
        }
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <LoginContainer>
            <div>
                <Heading>Login</Heading>
                <div>
                    <p>Email</p>
                    <SharedInput
                        type="text"
                        value={user.email}
                        placeholder="예)puleuspuleus@puleus.co.kr"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                    <p>Password</p>
                    <SharedInput
                        type="password"
                        value={user.password}
                        placeholder="비밀번호를 5자 이상 입력하세요"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />

                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </div>

                <br />
                <SignInBotten $isChecked={isChecked} onClick={handleLogin}>
                    로그인하기
                </SignInBotten>
                <SignUpBotten onClick={handleSignUp} type="button">
                    회원가입하기
                </SignUpBotten>
                {/* <SocialContainer>
                    <SocialDescription>SNS 계정으로 간편하게 가입하세요</SocialDescription>
                    <SocialBotten>
                        <SocialGoogle />
                        <SocialKakao />
                    </SocialBotten>
                </SocialContainer> */}
            </div>
        </LoginContainer>
    );
};

export default SignIn;
