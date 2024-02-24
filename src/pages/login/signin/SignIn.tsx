import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { User } from '../../../api/loginmodel';
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
import { SharedInput } from '../../Shared.styles';
import { usePostSignInData } from '../../../api/login/SignIn';

const SignIn: React.FC = () => {
    const { mutate, isLoading } = usePostSignInData();
    const navigate = useNavigate();
    const [hasNickname, setHasNickName] = useState(false);
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

    const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,12}$/;
        return passwordRegex.test(password);
    };

    useEffect(() => {
        const isEmailValid = user.email.length > 0 && validateEmail(user.email);
        const isPasswordValid =
            user.password.length >= 6 &&
            user.password.length <= 12 &&
            validatePassword(user.password);

        const accessTokenExpiration = Cookies.get('AccessToken');

        if (accessTokenExpiration) {
            if (hasNickname) alert('이미 로그인되어 있습니다.');
            navigate('/mainpage');
            return;
        }

        if (isEmailValid && isPasswordValid) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [user.email, user.password, navigate, hasNickname]);

    const handleSuccess = (response) => {
        const data = response.data;
        Cookies.set('AccessToken', data.accessToken, { expires: 1 / 24 });
        Cookies.set('RefreshToken', data.refreshToken, { expires: 30 });
        setHasNickName(data.hasNickname);
        setUser({
            email: '',
            password: '',
        });
        if (data.hasNickname) {
            navigate('/mainpage');
        } else {
            navigate('/service');
        }
    };

    const handleLogin = () => {
        try {
            if (user.email === '' || user.password === '') {
                setError('아이디와 비밀번호를 입력해주세요');
                return;
            }
            mutate(user, {
                onSuccess: handleSuccess,
            });
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
                {isLoading && <p>로그인 중입니다...</p>}
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
                        placeholder="영문/숫자 6자~12자로 입력해 주세요"
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
