import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { User } from '../../../api/Login/User';
import { Heading, SignInBotten, SocialBotten, SocialContainer, SocialDescription } from './SignIn.styles';
import { LoginContainner, LoginInput } from '../Login.styles';
import { useNavigate } from 'react-router-dom';
import SocialKakao from '../social/SocialKakao';
import SocialGoogle from '../social/SocialGoogle';
import { http } from '../../../api/http';

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({
        email: '',
        password: '',
    });
    const handleLogin = async () => {
        try {
            // 아이디 또는 비밀번호가 빈 경우 알림을 표시하고 함수 종료
            if (user.email === '' || user.password === '') {
                alert('아이디와 비밀번호를 입력해주세요');
                return;
            }
            // 서버에 로그인 요청 후 응답 처리
            const response = await http.post('api/auth/sign-in', user);
            // 응답 로그를 콘솔에 출력
            console.log(response);
            // 로그인 성공 시 서버에서 반환한 토큰을 쿠키에 저장
            Cookies.set('Authorization', response.data.token);
            // 응답 상태가 200이면 로그인 완료 메시지를 표시하고 메인 페이지로 이동
            if (response.status === 200) {
                alert(response.data.message);
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
                // 상태 코드가 404이면 오류 메시지를 알림으로 표시
                if (statusCode === 404) {
                    alert(errorMessage);
                }
            }
            // 그 외의 오류는 일반적인 알림으로 표시
            alert(error);
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
                        placeholder="비밀번호를 입력하세요"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                </div>

                <br />
                <SignInBotten color={'signin'} onClick={handleLogin}>
                    로그인하기
                </SignInBotten>
                <SignInBotten color={'signup'} onClick={handleSignUp} type="button">
                    회원가입하기
                </SignInBotten>
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
